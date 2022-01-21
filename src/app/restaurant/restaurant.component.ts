import { Component, OnInit } from '@angular/core';
import { Restaurants } from './restaurants/restaurants.model';
import { RestaurantSevervice } from './restaurant.service';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurant: Restaurants[]

  constructor(private restaurantSevervice: RestaurantSevervice) { }

  ngOnInit() {
    this.restaurantSevervice.restaurant().subscribe(restaurant => this.restaurant = restaurant)
  }

}
