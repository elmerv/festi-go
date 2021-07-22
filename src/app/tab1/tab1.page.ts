import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  data;
  // public featuredEvents = [
  //   {
  //     name: "Dodgers game",
  //     date: "6/21",
  //     img: "../../assets/dodgers.jpeg"
  //   }, 
  //   {
  //     name: "Bad Bunny concert",
  //     date: "7/4",
  //     img: "../../assets/concert.1.jpeg"
  //   },
  //   {
  //     name: "OC Fair",
  //     date: "7/6",
  //     img: "../../assets/ocFair.jpeg"
  //   },
  //   {
  //     name: "Jazz festival",
  //     date: "8/4",
  //     img: "../../assets/jazz.event.jpeg"
  //   },
  //   {
  //     name: "USC vs UCLA",
  //     date: "8/30",
  //     img: "../../assets/uscGame.jpeg"
  //   }
  // ]

public sportsEvents = [
  {
    name: "Sports Event",
    date: "8/10",
    img: "../../assets/coachella.jpeg"
  }
]
public concerts = [
  {
    name: "concert 1",
    date: "5/8",
    img: "../../assets/concert.2.jpeg"
  }, 
  {
    name: "concert 2",
    date: "1/8",
    img: "../../assets/concert.3.jpeg"
  }, 
  {
    name: "concert 3",
    date: "5/28",
    img: "../../assets/concert.4.jpeg"
  }
]
slideOpts = {
  slidesPerView: 3
}
  constructor(private service: ApiServiceService) {}

  getEvents() {
    this.service.getEventData().subscribe((res) => {
      this.data = res;
    });
  }
  ngOnInit(){
    this.getEvents();
  }

}

