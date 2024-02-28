import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  @Input() jsonData: any; // Input property to receive data from parent component

  documentHeaders: any[] = [];
  invoiceTableHeaders: string[] = [];
  invoiceTableData: any[] = [];
responseData: any;

  constructor() { }

  ngOnChanges(): void {
    if (this.jsonData && this.jsonData.DocumentData) {
      const documentData = this.jsonData.DocumentData;
      this.documentHeaders = Object.keys(documentData).map(key => ({
        name: key,
        value: documentData[key].Value
      }));
    }

    if (this.jsonData && this.jsonData.DocumentData && this.jsonData.DocumentData.Fields) {
      const invoiceTable = this.jsonData.DocumentData.Fields.find((field: any) => field.Name === 'InvoiceTable');
      if (invoiceTable && invoiceTable.Rows) {
        this.invoiceTableHeaders = Object.keys(invoiceTable.Rows[0].Columns);
        this.invoiceTableData = invoiceTable.Rows.map((row: any) => Object.values(row.Columns));
      }
    }
  }
}
