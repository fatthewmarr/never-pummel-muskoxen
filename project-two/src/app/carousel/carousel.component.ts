import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
  }
  
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  afterChange(e) {
  }

}
