import { Component, OnInit } from '@angular/core';
import {RestaurantSevervice} from '../restaurant/restaurant.service'
import {Restaurants} from '../restaurant/restaurants/restaurants.model'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurants: Restaurants

  constructor(private restaurantService: RestaurantSevervice, private route: ActivatedRoute) { }

  ngOnInit() {

    this.restaurantService.restaurantsById(this.route.snapshot.params['id']).subscribe(restaurants => this.restaurants = restaurants)
  }

}
