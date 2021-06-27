import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ItemService } from './../../services/item.service';
import { AuthService } from 'src/app/services/auth.service';
import { Item } from './../../interfaces/item';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  menuItems: Observable<Item[]>;
  currentAuthStatus$: Observable<any>

  constructor(
    private auth: AuthService,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.currentAuthStatus$ = this.auth.authStatusListener()
    this.menuItems = this.itemService.getMenuItems();
  }
}
