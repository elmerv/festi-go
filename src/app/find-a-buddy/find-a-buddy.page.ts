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
      pfp: "../../assets/pfp2.jpeg",
    },
    {
      name: "Alexander",
      title: "USC Student",
      location: "Glendale, CA",
      pfp: "../../assets/pfp4.jpg",
    },
    {
      name: "Samantha",
      title: "Baseball enthusiast",
      location: "Los Angeles, CA",
      pfp: "../../assets/pfp3.jpg",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
