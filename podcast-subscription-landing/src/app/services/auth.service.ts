import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  currentUser = null;
  private authStatusSub$ = new BehaviorSubject(this.currentUser);
  currentAuthStatus$ = this.authStatusSub$.asObservable();

  loginGoogle() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        return res
      })
      .catch(err => console.error(err))
  }

  logoutGoogle() {
    return this.auth.signOut();
  }

  authStatusListener(){
    this.auth.onAuthStateChanged((credential) => {
      if (credential){
        console.log(credential);
        // this.uid = credential.uid;
        // this.displayName = credential.displayName;
        // this.email = credential.email;
        this.authStatusSub$.next(credential);
        console.log('User is logged in');
      }
      else{
        console.log(credential);
        this.authStatusSub$.next(null);
        console.log('User is logged out');
      }
    });
    return this.currentAuthStatus$
  }
}
