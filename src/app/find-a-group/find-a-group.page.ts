import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-find-a-group',
  templateUrl: './find-a-group.page.html',
  styleUrls: ['./find-a-group.page.scss'],
})
export class FindAGroupPage implements OnInit {
  groups = [
    {
      name: "Group 1",
      numberOfPeople: "4 people",
      location: "Los Angeles, CA",
      pfp: "../../assets/pfp1.jpeg",
    },
    {
      name: "Group 2",
      numberOfPeople: "3 People",
      location: "Glendale, CA",
      pfp: "../../assets/pfp1.jpeg",
    },
    {
      name: " Group 3",
      numberOfPeople: "5 people",
      location: "Los Angeles, CA",
      pfp: "../../assets/pfp1.jpeg",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
