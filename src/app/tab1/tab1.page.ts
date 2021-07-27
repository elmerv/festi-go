import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  data;
  festival;
  concert;

slideOpts = {
  slidesPerView: 1.3
}
  constructor(private service: ApiServiceService) {}

  getEvents() {
    this.service.getEventData().subscribe((res) => {
      this.data = res;
      console.log(this.data)
    });
  }
  getFestival(){
    this.service.getFestivalData().subscribe((res) => {
      this.festival = res;
      console.log(this.festival)
    });
  }
  getConcerts(){
    this.service.getConcertData().subscribe((res) => {
      this.concert = res;
    });
  }
  ngOnInit(){
    this.getEvents();
    this.getFestival();
    this.getConcerts();
  }

}

