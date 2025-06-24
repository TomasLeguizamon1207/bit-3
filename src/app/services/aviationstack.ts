import { Injectable, inject } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class Aviationstack {

  constructor() { }
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://api.aviationstack.com/v1/flights';
  private accessKey = 'b2aff068c17ca7cb38a220a21985a9da';

  getPlaneList(){
    return this.httpClient.get(this.apiUrl);
  }
    getLiveFlights() {
    return this.httpClient.get(`${this.apiUrl}?access_key=${this.accessKey}&flight_status=active`);
  }

  searchFlightByIcao(icao: string) {
    return this.httpClient.get(`${this.apiUrl}?access_key=${this.accessKey}&flight_icao=${icao}`);
  }
}
