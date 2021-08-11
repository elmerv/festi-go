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
  comedy;
  ratio: string = "16_9";
  url = "";
  isFirst = 0; 
  one = 1;
slideOpts = {
  slidesPerView: 1.3
}
  constructor(private service: ApiServiceService) {}

  getEvents() {
    this.service.getEventData().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
  getFestival(){
    this.service.getFestivalData().subscribe((res) => {
      this.festival = res;
    });
  }
  getConcerts(){
    this.service.getConcertData().subscribe((res) => {
      this.concert = res;
    });
  }
  getComedy(){
    this.service.getComedyData().subscribe((res) => {
      this.comedy = res;
      console.log(this.comedy)
    })
  }
  ngOnInit(){
    this.getEvents();
    this.getFestival();
    this.getConcerts();
    this.getComedy();
  }

}

