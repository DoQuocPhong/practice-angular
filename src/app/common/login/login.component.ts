import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() 
  title: string = '';
  username: string = '';
  password: string = '';

  clickLogin(){
      alert('Demo');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
