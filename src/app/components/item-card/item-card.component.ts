import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url:string = "../assets/img/img1.png";

  changeImage(event: any){
    this.url = event.target.src;
    console.log(event.target.src);
  }

}
