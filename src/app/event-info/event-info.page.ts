import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.page.html',
  styleUrls: ['./event-info.page.scss'],
})
export class EventInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
customElements.define('nav-detail', class NavDetail extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ion-header translucent>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button defaultHref="/"></ion-back-button>
      </ion-buttons>
      <ion-title>UCLA vs USC</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen class="ion-padding">
    <ion-header>
      <ion-toolbar>
        <ion-title>USC vs UCLA</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <div id="section1">
      <img src="../../assets/uscGame.jpeg" style="object-fit:cover; height: 30%">
      <div id="blue"></div>
      <div id="section2">
        <h2 style="font-size: large;">Have a buddy: 5</h2>
      </div>
      <div id="section3">
        <h2 style="font-size: large;">Need a buddy: 15</h2> 
      </div>
      <div id="section4">
        <h2><b>Event Details</b></h2>
        <h2><b>Name of event:</b> USC vs UCLA</h2>
        <h2><b>Date:</b> 6/30</h2>
        <h2><b>Time:</b>6:00</h2>
        <h2><b>Location:</b>LA Memorial Coliseum</h2>
        <h2><b>Description:</b>Football game</h2>
      </div>
    </div>
  </ion-content>
    `;
  }
});