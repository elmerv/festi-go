// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss']
// })
// export class Tab2Page {
//   blogs : String[] = [];
//   currentInput;
//   constructor() {}
//   addBlog(){
//     this.blogs.push(this.currentInput);
//   }
// }
import { Component } from '@angular/core';
import arr from '../tab3/friends';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab3Page {
  friendsArr: any[] = arr;
  constructor() {}

}
