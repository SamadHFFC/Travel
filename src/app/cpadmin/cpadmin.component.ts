import { Component, OnInit } from '@angular/core';
import SimpaleJson from './../files/wheather.json';



@Component({
  selector: 'app-cpadmin',
  templateUrl: './cpadmin.component.html',
  styleUrls: ['./cpadmin.component.css']
})
export class CPAdminComponent implements OnInit {

  public travelData = [];
  constructor() {

    console.log('this is for json file loading',SimpaleJson)
   }

  ngOnInit() {

    this.travelData = SimpaleJson;

    console.log('it is for testing',this.travelData)
  }

}

