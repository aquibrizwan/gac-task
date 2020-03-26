

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class API {
  constructor(private http: HttpClient) {}

  getUserData() {
    return of({
        displayCol: ['TaskName', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday'],

        arrayOfOrg :[
            {
              name: 'Arif',
              dataSource: [
                { TaskName: 'Development of app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                { TaskName: 'Design new app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                { TaskName: 'Bug fixes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                { TaskName: 'Development of featutes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                { TaskName: 'Total', Sunday: '32', Monday: '32', Tuesday: '32', Wednesday: '32', thursday: '20', Friday: '20', Saturday: '20' },
              ]
            },
            {
                name: 'Asif',
                dataSource: [
                  { TaskName: 'Development of some app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                  { TaskName: 'Design new app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                  { TaskName: 'Bug fixes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                  { TaskName: 'Development of featutes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                  { TaskName: 'Total', Sunday: '32', Monday: '32', Tuesday: '32', Wednesday: '32', thursday: '20', Friday: '20', Saturday: '20' },
                ]
              },
              {
                name: 'Aquib',
                dataSource: [
                  { TaskName: 'Development of some app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                  { TaskName: 'Design new app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                  { TaskName: 'Bug fixes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                  { TaskName: 'Development of featutes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
                  { TaskName: 'Total', Sunday: '32', Monday: '32', Tuesday: '32', Wednesday: '32', thursday: '20', Friday: '20', Saturday: '20' },
                ]
              }
        ]
    });
  }
}