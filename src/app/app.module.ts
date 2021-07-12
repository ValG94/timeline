import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import {HttpClientModule} from "@angular/common/http";
import {CardsService} from "./cards.service";
import { TimelineComponent } from './timeline/timeline.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NewTimelineComponent } from './new-timeline/new-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TimelineComponent,
    NewTimelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: '', component:TimelineComponent},
      {path: 'cards', component:CardsComponent},
      {path: 'timeline', component: TimelineComponent},
      {path: 'timeline-new', component: NewTimelineComponent},
      {path: 'timeline-newcard', component: NewTimelineComponent}]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
