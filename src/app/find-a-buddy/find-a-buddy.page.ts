import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-a-buddy',
  templateUrl: './find-a-buddy.page.html',
  styleUrls: ['./find-a-buddy.page.scss'],
})
export class FindABuddyPage implements OnInit {
  people = [
    {
      name: "Bob",
      title: "UCLA Sophomore",
      location: "Los Angeles, CA",
      pfp: "../../assets/pfp1.jpeg",
    },
    {
      name: "Stuart Little",
      title: "USC Student",
      location: "Glendale, CA",
      pfp: "../../assets/pfp1.jpeg",
    },
    {
      name: "John Dough",
      title: "Baseball enthusiast",
      location: "Los Angeles, CA",
      pfp: "../../assets/pfp1.jpeg",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
