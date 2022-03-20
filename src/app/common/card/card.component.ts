import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: String = '';
  @Input() like: String = '';
  @Input() post: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
