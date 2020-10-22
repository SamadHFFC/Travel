import { Component, OnInit } from '@angular/core';
import SimpaleJson from './../files/wheather.json';
import Bridge from './../files/bridges.json';
import CameraApi from './../files/CameraApi.json';
import BridgeCLeance from './../files/BridgeClearances.json';
import trafic_alert_api from './../files/TraficAlertApi.json';
import Mountain_PassConditions from './../files/MountainPassConditions.json';
import travelTimesApi from './../files/TravelTimes.json';
import ferries_api from './../files/ferriesApi.json';
import sheduleApi from './../files/sheduleApi.json';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';





@Component({
  selector: 'app-cpadmin',
  templateUrl: './cpadmin.component.html',
  styleUrls: ['./cpadmin.component.css']
})
export class CPAdminComponent implements OnInit {
  restItems: any;
  restItemsUrl = 'http://wsdot.wa.gov/Traffic/api/TrafficFlow/TrafficFlowREST.svc/GetTrafficFlowAsJson?AccessCode=74987060-7ddd-42b4-821d-c6e2e57eac35&FlowDataID=2147483647';
  // Your access code is: 74987060-7ddd-42b4-821d-c6e2e57eac35
  // Url: http://wsdot.wa.gov/Traffic/api/TrafficFlow/TrafficFlowREST.svc/GetTrafficFlowAsJson?AccessCode={ACCESSCODE}&FlowDataID={FLOWDATAID}
	// "FlowDataID":2147483647,
  // free api call https://jsonplaceholder.typicode.com/users


  public travelData = [];
  public bridgeApi = [];
  public camera_api = [];
  public bridge_clean = [];
  public traffic_alert = [];
  public mountain_pass_conditions =[];
  public travel_times_api =[];
  public ferries_data_api = [];
  public shedule_api: any;



  constructor(private http: HttpClient) {

    // console.log('this is for json file loading',SimpaleJson)
    // console.log("this is data for bridges",Bridge)
    // console.log("this is for camera api call",CameraApi)
   }

  ngOnInit() {

    this.getRestItems();


    this.travelData = SimpaleJson;
    this.bridgeApi = Bridge;
    this.camera_api = CameraApi;
    this.bridge_clean = BridgeCLeance;
    this.traffic_alert = trafic_alert_api;
    this.mountain_pass_conditions = Mountain_PassConditions;
    this.travel_times_api = travelTimesApi; 
    this.ferries_data_api = ferries_api;
    this.shedule_api = sheduleApi;





    // console.log('it is for testing',this.travelData)
    // console.log("this is loading for bridges data",this.bridgeApi)
    // console.log("camera data loading",this.camera_api)
    // console.log("the data of bridge clearance",this.bridge_clean)
    // console.log("this data is for Traffic Alert",this.traffic_alert)
    // console.log("mountain pass conditions data is: ",this.mountain_pass_conditions)

    // console.log("The Travel Times Data is:",this.travel_times_api);
    // console.log("the Ferries of Data is loading here",this.ferries_data_api)
    // console.log('the shedule api call' ,this.shedule_api)
  }


  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }


  // Get_travel_information_api(){
    // console.log('the shedule api call' ,this.shedule_api)

    // for (var i = 0; i < this.shedule_api[0].length; i++) {
    // }
    // console.log('the shedule api call' ,this.shedule_api)

    
  // }

}

