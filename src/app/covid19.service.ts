import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private httpClient:HttpClient) { 

  }
  public getCovid19Status():Observable<any> {
    return this.httpClient.get('https://corona.lmao.ninja/v2/countries');
  }
}
