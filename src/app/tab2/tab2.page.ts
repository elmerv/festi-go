
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
      img: "../../assets/dodgers.jpeg"
    }, 
    {
      name: "John Doe",
      recentConversation: "I had a blast!",
      img: "../../assets/concert.1.jpeg"
    },
    {
      name: "Bob Johnson",
      recentConversation: "That was fun!",
      img: "../../assets/ocFair.jpeg"
    },
    {
      name: "George Thompson",
      recentConversation: "Wanna go to another event some other time?",
      img: "../../assets/jazz.event.jpeg"
    },
    {
      name: "Kimberly Martinez",
      recentConversation: "The festival was way more fun than I expected",
      img: "../../assets/uscGame.jpeg"
    }
  ]  
  constructor() {}

}
