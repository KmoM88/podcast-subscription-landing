import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

import { BehaviorSubject } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private afStore: AngularFirestore,
  ) { }

  role= "root"
  userFirestore: User;
  currentUser = null;
  private authStatusSub$ = new BehaviorSubject(this.currentUser);
  currentAuthStatus$ = this.authStatusSub$.asObservable();

  loginGoogle(checkBox: boolean) {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res: any) => {
        this.userFirestore = {
          additionalUserInfo:
          {
            profile:
            {
              email: res.additionalUserInfo.profile.email,
              family_name: res.additionalUserInfo.profile.family_name,
              given_name: res.additionalUserInfo.profile.given_name,
              id: res.additionalUserInfo.profile.id,
              name: res.additionalUserInfo.profile.name,
              picture: res.additionalUserInfo.profile.picture,
              verified_email: res.additionalUserInfo.profile.verified_email,
            }
          },
          user: {
            mailList: checkBox,
            role: this.role,
            email: res.user.email,
            emailVerified: res.user.emailVerified,
            metadata: {
              creationTime: res.user.metadata.creationTime,
              lastSignInTime: res.user.metadata.lastSignInTime
            },
            phoneNumber: res.user.phoneNumber,
            photoURL: res.user.photoURL,
          },
          favs: []
        }
        this.saveUser(this.userFirestore)
      }
      )
      .catch(err => console.error(err))
  }

  logoutGoogle() {
    return this.auth.signOut();
  }

  authStatusListener(){
    this.auth.onAuthStateChanged((credential) => {
      if (credential){
        // console.log(credential);
        // this.uid = credential.uid;
        // this.displayName = credential.displayName;
        // this.email = credential.email;
        this.authStatusSub$.next(credential);
        console.log('User is logged in');
      }
      else{
        // console.log(credential);
        this.authStatusSub$.next(null);
        console.log('User is logged out');
      }
    });
    return this.currentAuthStatus$
  }

  getUserData() {
    if(this.currentAuthStatus$ !== null){
      // console.log(this.userFirestore)
      return this.userFirestore
    }
    return this.userFirestore
  }

  saveUser(user: User) {
    this.afStore.doc(`users/${user.additionalUserInfo.profile.id}`).set(user)
    .then(res => {return res})
    .catch(err => {console.error(err)})
  }
}
