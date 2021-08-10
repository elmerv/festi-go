
import { Component } from '@angular/core';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab3Page {
  public messages = [
    {
      name: "Samantha Rivera",
      recentConversation: "Wanna go to a Dodgers game together?",
      img: "../../assets/pfp3.jpg"
    }, 
    {
      name: "John Doe",
      recentConversation: "I had a blast!",
      img: "../../assets/pfp5.png"
    },
    {
      name: "Bob Johnson",
      recentConversation: "That was fun!",
      img: "../../assets/pfp2.jpeg"
    },
    {
      name: "George Thompson",
      recentConversation: "Wanna go to another event some other time?",
      img: "../../assets/pfp4.jpg"
    },
    {
      name: "Kimberly Martinez",
      recentConversation: "The festival was way more fun than I expected",
      img: "../../assets/pfp7.jpeg"
    }
  ]  
  constructor() {}

}
