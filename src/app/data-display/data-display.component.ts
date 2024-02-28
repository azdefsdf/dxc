import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  jsonData: any; // Assuming your response data is stored here
  @Input() responseData: any;


  onDataLoaded(data: any) {
    // Handle the emitted data
    this.jsonData = data;
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // You can fetch the data from the server again if needed
    // For example:
    // this.http.get('').subscribe(
    //  (response: any) => {
    //    this.jsonData = response;
    //   },
    //   (error: any) => {
    //     console.error('Error fetching data:', error);
    //   }
    //  );
    
    //For demonstration purpose, assuming the jsonData is already available
    this.jsonData = {
     "data": [
        ["Tiger Nixon", "System Architect", "Edinburgh", 61, "2011/04/25", "$320,800","System Architect","System Architect"],
        ["Garrett Winters", "Accountant", "Tokyo", 63, "2011/07/25", "$170,750","Accountant","Accountant"],
        ["Ashton Cox", "Junior Technical Author", "San Francisco", 66, "2009/01/12", "$86,000","Accountant","Accountant"],
        // Add more data as needed
     ]
     };
  }
}
