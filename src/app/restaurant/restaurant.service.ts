import {MEAT_API} from "../app.api"
import {Http} from "@angular/http"
import {Observable} from "rxjs/Observable"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Injectable } from "@angular/core"
import { ErrorHandler } from "../app.error-handler"

import { Restaurants } from "./restaurants/restaurants.model"
import { MenuItem } from "../restaurant-detail/menu-item/menu.item.model"


@Injectable()
export class RestaurantSevervice {

    constructor(private http:Http){}

    restaurant(): Observable<Restaurants[]>{
      return this.http.get(`${MEAT_API}/restaurant`).map(response => response.json()).catch(ErrorHandler.handleError)
    }

    restaurantsById(id: string): Observable<Restaurants>{
      return this.http.get(`${MEAT_API}/restaurant/${id}`).map(response => response.json()).catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
      return this.http.get(`${MEAT_API}/restaurant/${id}/reviews`).map(response => response.json()).catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
      return this.http.get(`${MEAT_API}/restaurant/${id}/menu`).map(response => response.json()).catch(ErrorHandler.handleError)
    }

}