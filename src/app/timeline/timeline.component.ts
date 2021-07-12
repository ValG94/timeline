import { Component, OnInit } from '@angular/core';
import {Cards} from "../Cards";
import {CardsService} from "../cards.service";
import {Timeline} from "../Timeline";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timeline=this.cardService.getTimeline();



  constructor(private cardService : CardsService) { }

  ngOnInit(): void {


  }
  deleteTimeline(timeline : any){
    console.log("suppression du timeline dans le tableau" + timeline.id);
  }
}
