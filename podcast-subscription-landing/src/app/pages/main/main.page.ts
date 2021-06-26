import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ItemService } from './../../services/item.service';
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
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.menuItems = this.itemService.getMenuItems();
  }
}
