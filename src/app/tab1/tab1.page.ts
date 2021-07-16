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
    },
    {
      name: "OC Fair",
      date: "7/6",
      img: "../../assets/ocFair.jpeg"
    },
    {
      name: "Jazz festival",
      date: "8/4",
      img: "../../assets/jazz.event.jpeg"
    },
    {
      name: "USC vs UCLA",
      date: "8/30",
      img: "../../assets/uscGame.jpeg"
    }
  ]

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
  constructor() {}

}
customElements.define('nav-home', class NavHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ion-header translucent>
    <ion-toolbar>
      <ion-title>Home page</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <h2>Popular Events</h2>
      <ion-slides [options] ="slideOpts" class="ion-slides">
        <ion-slide *ngFor="let event of featuredEvents">
            <img src={{event.img}} class="swiper-slide" onclick="navigateForward()"/>
          <p class="paragraphs">{{event.date}}</p>
          <h5 class="headers">{{event.name}}</h5>
        </ion-slide>
        </ion-slides>
  </ion-content>
    `;
  }
});
