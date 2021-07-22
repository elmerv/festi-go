import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  getEventData(){
    return this.http.get("https://app.ticketmaster.com/discovery/v2/events.json?&apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2")
  }
  retrieveEventInfo(id){
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?&apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2`)
  }
}
