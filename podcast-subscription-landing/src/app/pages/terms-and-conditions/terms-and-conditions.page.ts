import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss'],
})
export class TermsAndConditionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
