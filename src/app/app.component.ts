import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-shop';
  url:string = "../assets/img/img1.png";

  constructor(){}
  changeImage(event: any){
    this.url = event.target.src;
    console.log(event.target.src);
  }
}
