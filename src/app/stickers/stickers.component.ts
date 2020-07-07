import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {

  show = false;

  constructor() { }

  ngOnInit() {
  }

  buyStickFunction(){
  this.show = !this.show;
  }

}
