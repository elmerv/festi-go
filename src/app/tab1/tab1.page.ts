import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public featuredEvents = [
    {
      name: "Dodgers game",
      date: "6/21",
      img: "../../assets/dodgers.jpeg"
    }, 
    {
      name: "Bad Bunny concert",
      date: "7/4",
      img: "../../assets/concert.1.jpeg"
    },{
      name: "OC Fair",
      date: "7/6",
      img: "../../assets/ocFair.jpeg"
    }
  ]

public sportsEvents = [
  {
    name: "concert1",
    date: "day/month",
    img: "../../assets/coachella.jpeg"
  }
]
slideOpts = {
  slidesPerView: 3
}
  constructor() {}
  

}
