import { Component, OnInit } from '@angular/core';
import SimpaleJson from './../files/wheather.json';
import Bridge from './../files/bridges.json';



@Component({
  selector: 'app-cpadmin',
  templateUrl: './cpadmin.component.html',
  styleUrls: ['./cpadmin.component.css']
})
export class CPAdminComponent implements OnInit {

  public travelData = [];
  public bridgeApi = [];

  constructor() {

    console.log('this is for json file loading',SimpaleJson)
    console.log("this is data for bridges",Bridge)
   }

  ngOnInit() {

    this.travelData = SimpaleJson;
    this.bridgeApi = Bridge;


    console.log('it is for testing',this.travelData)
    console.log("this is loading for bridges data",this.bridgeApi)
  }

}

