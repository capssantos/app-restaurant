import { Component, OnInit } from '@angular/core';
import { RestaurantSevervice } from '../../restaurant/restaurant.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu.item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:Observable<MenuItem[]>

  constructor(private restaurantSevervice: RestaurantSevervice, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantSevervice.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }
  
  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
