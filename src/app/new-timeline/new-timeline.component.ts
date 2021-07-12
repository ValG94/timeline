import { Component, OnInit } from '@angular/core';
import {CardsService} from "../cards.service";
import {FormBuilder} from "@angular/forms";
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-new-timeline',
  templateUrl: './new-timeline.component.html',
  styleUrls: ['./new-timeline.component.css']
})
export class NewTimelineComponent implements OnInit {
  //Déclarer un tableau pour ajouter mes nouveaux timelines
  newTimeline: NewTimelineComponent[] = [];


saveNewTimeline(){
  return this.httpClient
    .post('http://localhost:8080/api/timeline', this.newTimeline).subscribe(
    () => {
      console.log('New timeline enregistré !');
    },
    (error) =>{
console.log('Erreur !' + error);
   }
  );
}

  constructor(private cardsService : CardsService, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
