import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
  blogs : String[] = [];
  currentInput;
  personName = ""; 
  constructor(private route: ActivatedRoute) { }
  addBlog(){
    this.blogs.push(this.currentInput);
    console.log(this.currentInput)
  }
  getName(){
    const id = this.route.snapshot.paramMap.get('person');
    this.personName = id;


  }
  ngOnInit() {
    this.getName();
  }

}
