import { Component, OnInit } from '@angular/core';
import SimpaleJson from './../files/wheather.json';
import Bridge from './../files/bridges.json';
import CameraApi from './../files/CameraApi.json';
import BridgeCLeance from './../files/BridgeClearances.json';
import trafic_alert_api from './../files/TraficAlertApi.json';
import Mountain_PassConditions from './../files/MountainPassConditions.json';
import travelTimesApi from './../files/TravelTimes.json';
import ferries_api from './../files/ferriesApi.json';


@Component({
  selector: 'app-cpadmin',
  templateUrl: './cpadmin.component.html',
  styleUrls: ['./cpadmin.component.css']
})
export class CPAdminComponent implements OnInit {
  

  public travelData = [];
  public bridgeApi = [];
  public camera_api = [];
  public bridge_clean = [];
  public traffic_alert = [];
  public mountain_pass_conditions =[];
  public travel_times_api =[];
  public ferries_data_api = [];


  constructor() {

    // console.log('this is for json file loading',SimpaleJson)
    // console.log("this is data for bridges",Bridge)
    // console.log("this is for camera api call",CameraApi)
   }

  ngOnInit() {

    this.travelData = SimpaleJson;
    this.bridgeApi = Bridge;
    this.camera_api = CameraApi;
    this.bridge_clean = BridgeCLeance;
    this.traffic_alert = trafic_alert_api;
    this.mountain_pass_conditions = Mountain_PassConditions;
    this.travel_times_api = travelTimesApi; 
    this.ferries_data_api = ferries_api;



    console.log('it is for testing',this.travelData)
    console.log("this is loading for bridges data",this.bridgeApi)
    console.log("camera data loading",this.camera_api)
    console.log("the data of bridge clearance",this.bridge_clean)
    console.log("this data is for Traffic Alert",this.traffic_alert)
    console.log("mountain pass conditions data is: ",this.mountain_pass_conditions)

    console.log("The Travel Times Data is:",this.travel_times_api);
    console.log("the Ferries of Data is loading here",this.ferries_data_api)
  }


}

