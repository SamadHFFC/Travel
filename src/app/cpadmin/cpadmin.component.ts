import { Component, OnInit } from '@angular/core';
import SimpaleJson from './../files/wheather.json';
import Bridge from './../files/bridges.json';
import CameraApi from './../files/CameraApi.json';



@Component({
  selector: 'app-cpadmin',
  templateUrl: './cpadmin.component.html',
  styleUrls: ['./cpadmin.component.css']
})
export class CPAdminComponent implements OnInit {
  

  public travelData = [];
  public bridgeApi = [];
  public camera_api = [];

  constructor() {

    // console.log('this is for json file loading',SimpaleJson)
    // console.log("this is data for bridges",Bridge)
    // console.log("this is for camera api call",CameraApi)
   }

  ngOnInit() {

    this.travelData = SimpaleJson;
    this.bridgeApi = Bridge;
    this.camera_api = CameraApi;



    console.log('it is for testing',this.travelData)
    console.log("this is loading for bridges data",this.bridgeApi)
    console.log("camera data loading",this.camera_api)
    
  }

}

