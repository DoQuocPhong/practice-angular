import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() content: String = '';
  @Input() contentLink: String = '';
  @Input() contentPost: String = '';
  @Input() contentLike: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
