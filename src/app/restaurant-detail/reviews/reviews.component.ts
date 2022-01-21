import { Component, OnInit } from '@angular/core';
import { RestaurantSevervice } from '../../restaurant/restaurant.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantSevervice: RestaurantSevervice, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews=this.restaurantSevervice.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
