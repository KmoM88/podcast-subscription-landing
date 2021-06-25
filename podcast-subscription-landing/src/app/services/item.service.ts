import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getMenuItems() {
    return this.http.get<Item[]>('./assets/items/menu-items.json');
  }

}
