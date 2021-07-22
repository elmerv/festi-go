
import { Component } from '@angular/core';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab3Page {
  public messages = [
    {
      name: "Stuart Little",
      recentConversation: "Wanna go to a Dodgers game together?",
      img: "../../assets/dodgers.jpeg"
    }, 
    {
      name: "John Doe",
      recentConversation: "sheeeesh",
      img: "../../assets/concert.1.jpeg"
    },
    {
      name: "Bob the Great",
      recentConversation: "That was fun!",
      img: "../../assets/ocFair.jpeg"
    },
    {
      name: "King George the second",
      recentConversation: "I am the best",
      img: "../../assets/jazz.event.jpeg"
    },
    {
      name: "Hamster",
      recentConversation: "I like hamsters",
      img: "../../assets/uscGame.jpeg"
    }
  ]  
  constructor() {}

}
