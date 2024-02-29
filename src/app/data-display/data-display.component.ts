import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  @Input() jsonData: any[]=[]; // Input property to receive data from parent component

  documentHeaders: any[] = [];
  invoiceTableHeaders: string[] = [];
  invoiceTableData: any[] = [];
  responseData: any;

  constructor() { 
   
    console.log('TT');
    console.log('==>'+this.jsonData);
  }

  ngOnChanges(): void {
  
    
   }
}
