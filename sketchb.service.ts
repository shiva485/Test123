import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SketchbService {

  constructor(private hc: HttpClient) {
  }
  getAllReg(): Observable<any> {
    const getAllUrl = "https://api.openbrewerydb.org/breweries"
    return this.hc.get(getAllUrl, { responseType: 'json' })
  }
  getBreweryByData(type: any, data: any): Observable<any> {
    const url = "https://api.openbrewerydb.org/breweries"
    if (type == 'name') {
      return this.hc.get(`${url}` + '?by_name=' + encodeURIComponent(data), { responseType: 'json' })
    } else {
      return this.hc.get(`${url}` + '?by_city=' + encodeURIComponent(data), { responseType: 'json' })
    }
  }
}
