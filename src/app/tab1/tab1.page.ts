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

slideOpts = {
  slidesPerView: 1.3
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

