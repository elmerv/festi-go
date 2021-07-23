import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss'],
})
export class TestPagePage implements OnInit {
  title = 'AngularLesson';
  textToChange = 'Type something here, its kinda empty';
  Alejandro = ["My name is Alejandro", "I am 14 years old", "I like to watch anime", "I enjoy outdoor activites"];
  constructor() { }

  ngOnInit() {
  }

}



