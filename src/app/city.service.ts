import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class CityService {

  private baseUrl:string="http://localhost:8080"
  username: string = "";
  password: string = "";

  constructor(private _http:HttpClient) { }

  login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    this.username = username;
    this.password = password
    return this._http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'})
  }

  getCities(page:number){

    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get(this.baseUrl + '/cities/',
    {
      params: {
        page: page,
        size: '10'
      }
    }
      );
  }

  searchCity(city:string){
    return this._http.post(this.baseUrl + '/cities/search',
    {
      "name": city
    }
      );
  }

  updateCity(cityId:number, data:any, page:number){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

    const body = {
      "id":cityId,
      "name": data[0],
      "imageURI":data[1]
    };
    return this._http.put(this.baseUrl + '/cities',
    body, {headers}
      );
  }
}
