import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cards} from "./Cards";
import {CardsComponent} from "./cards/cards.component";
import { Timeline } from './Timeline';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  constructor(private http: HttpClient) {
  }


  getCards() {
    //Appel du service vers l'API
    return this.http.get<Cards[]>('http://localhost:8080/api/timeline/1/card')
  }

  getTimeline(){
    return this.http.get<Timeline[]>('http://localhost:8080/api/timeline')
  }
}
