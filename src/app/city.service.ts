import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class CityService {

  private baseUrl:string="http://localhost:8080"

  constructor(private _http:HttpClient) { }

  getCities(page:number){
    return this._http.get(this.baseUrl + '/cities/',
    {
      params: {
        offset: page,
        pageSize: '10'
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
    return this._http.put(this.baseUrl + '/cities',
    {
      "id":cityId,
      "name": data[0],
      "imageURI":data[1]
    }
      );
  }
}
