import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
  blogs : String[] = [];
  currentInput
  constructor() { }
  addBlog(){
    this.blogs.push(this.currentInput);
    console.log(this.currentInput)
  }
  ngOnInit() {
  }

}
