import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.page.html',
  styleUrls: ['./event-info.page.scss'],

})
export class EventInfoPage implements OnInit {
  data;

  constructor(private route: ActivatedRoute, private service: ApiServiceService) { }
  showData() {
    console.log(this.data._embedded.events);
    console.log("ALejandro");
  }

  getEvents() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.retrieveEventInfo(id).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.getEvents();
  }

}
