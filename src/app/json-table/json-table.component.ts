import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-json-table',
    templateUrl: './json-table.component.html',
    styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit {
    jsonData: any ; // Initialize an empty object

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get('http://192.168.217.132:8080/data').subscribe((data: any) => {
            this.jsonData = data; // Store the fetched data
        });
    }
}
