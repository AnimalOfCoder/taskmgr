import { Component, OnInit } from '@angular/core';
import { getDate } from 'date-fns'

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.scss']
})
export class SliderbarComponent implements OnInit {

  today = 'day';

  constructor() { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }

}
