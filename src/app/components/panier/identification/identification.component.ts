import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  user: Client = {};

  constructor() { }

  ngOnInit(): void {
  }

  login(){}

}
