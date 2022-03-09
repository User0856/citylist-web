import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CityService {

  private baseUrl:string="http://localhost:8080"

  constructor(private _http:HttpClient) { }

  getCities(page:number){
    return this._http.get(this.baseUrl + '/cities/' + page + '/10');
  }
}
