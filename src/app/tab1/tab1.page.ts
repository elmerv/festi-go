import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public concerts = [
    {
      name: "concert1",
      date: "day/month",
      img: "../../assets/dodgers.jpeg"
    },
    {
      name: "concert1",
      date: "day/month",
      img: "../../assets/dodgers.jpeg"
    },
    {
      name: "concert1",
      date: "day/month",
      img: "../../assets/dodgers.jpeg"
    }
  ]
  public sportsEvents = [
    
  ]
  constructor() {}
  

}
