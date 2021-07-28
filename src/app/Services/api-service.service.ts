import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  getEventData(){
    return this.http.get("https://app.ticketmaster.com/discovery/v2/events?apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2&keyword=sports%20games&locale=*")
  }
  retrieveEventInfo(id){
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events?${id}.apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2&keyword=sports%20games&locale=*`)
  }
  getFestivalData(){
    return this.http.get("https://app.ticketmaster.com/discovery/v2/events?apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2&keyword=Festivals&locale=*&preferredCountry=us")
  }
  retrieveFestivaltData(id){
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events?${id}.apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2&keyword=Festivals&locale=*&preferredCountry=us`)
  }
  getConcertData(){
    return this.http.get("https://app.ticketmaster.com/discovery/v2/events?apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2&keyword=Concerts&locale=*")
  }
  retrieveConcertData(id){
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events?${id}.apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2&keyword=Concerts&locale=*`)
  }
  getComedyData(){
    return this.http.get("https://app.ticketmaster.com/discovery/v2/events?apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2&keyword=comedy&locale=*")
  }
  retrieveComedyData(id){
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events?${id}.apikey=18J2Va6keAAywBA969BAaMH5AQSfE8s2&keyword=comedy&locale=*`)
  }
}
