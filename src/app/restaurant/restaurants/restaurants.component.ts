import { Component, OnInit, Input } from '@angular/core';
import { Restaurants } from './restaurants.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  @Input() restaurants: Restaurants;

  constructor() { }

  ngOnInit() {
  }

}
