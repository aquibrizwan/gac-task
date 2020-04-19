

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class API {
  constructor(private http: HttpClient) {}



  // getUserData() {
  //   curl -X POST -d '{
  //     "author": "alanisawesome",
  //     "title": "The Turing Machine"
  //   }' 'https://mnmnmp-da639.firebaseio.com//rest/saving-data/fireblog/posts.json'
    getUserData() {
      // return this.http.post(`${BASE_URL}/OMSDataAPIs`, {
      //   method: 'OMS/api/operation.php/v1/fetchOrders',
      //   type: 'post',
      //   datetype: 'created_date', // TODO why this is hardcoded
      //   status: 9,
      //   businessId: ['15'],
      //   sortBy: 'desc',
      //   limit: 1,
      // });
    }

    
}