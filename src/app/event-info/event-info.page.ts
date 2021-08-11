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
  image; 
  constructor(private route: ActivatedRoute, private service: ApiServiceService) { }

  getEvents() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.retrieveEventInfo(id).subscribe(data => {
      this.data = data;
      for(let i: number = 0; i < this.data.images.length;i++){
        if(this.data.images[i].ratio == "3_2"){
          this.image = this.data.images[i].url;
          console.log(this.image);
    
        }
      }
    });
  }

  ngOnInit() {
    this.getEvents();
  }

}
