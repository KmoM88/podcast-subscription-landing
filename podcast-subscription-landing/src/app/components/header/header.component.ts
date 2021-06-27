import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  constructor(
    private auth: AuthService
  ) { }

  currentAuthStatus$: Observable<any>
  userData: User

  ngOnInit() {
    this.currentAuthStatus$ = this.auth.authStatusListener()
    this.currentAuthStatus$.subscribe(
      res => {
        // console.log("TEST")
        if(res !== null && res !== undefined){
          this.userData = this.auth.getUserData();
          // console.log(this.userData)
        }
      }
    )
  }

}
