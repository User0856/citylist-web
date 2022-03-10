import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  public page:number=0;
  public cities: Array<any> = [];
  public pages: Array<number> = [];
  p: number = 1;
  collection: any[] = this.pages;


  constructor(private _cityService:CityService) { }

  setPage(i:number, event:any){

    event.preventDefault();
    this.page = i;
    this.getCities();

  }

  getStartPage(){
    if (this.page < 5) {
      return 0;
    }
    else {
      return this.page - 5;
    }
  }

  getEndPage(){
    if (this.page < this.pages.length - 10) {
      return this.page + 10;
    } else {
      return this.page + 5;
    }
  }

  getPage(){
    if (this.page < 5){
      return 0;
    } else {
      return this.page -5;
    }
  }

  ngOnInit() {
    this.getCities();
  }

  getCities(){
    this._cityService.getCities(this.page).subscribe(
      (data:any)=>{
        this.cities = data['content'];
        this.pages = new Array(data['totalPages']);
      },
      (error)=>{
        console.log(error.error.message);
      }
    )
  }

  onClickSubmit(cityName:string) {
    this._cityService.searchCity(cityName).subscribe(
      (data:any)=>{
        this.cities = data['content'];
        this.pages = new Array(data['totalPages']);
      },
      (error)=>{
        console.log(error.error.message);
      }
    )
 }

 updateCity(cityId:number, name:string, imgURI:string){
    var data = window.prompt('Enter new city name and image URL separated by ;', name+";"+imgURI)?.split(";");
    this._cityService.updateCity(cityId, data, this.page).subscribe(
      (data:any)=>{
        this._cityService.getCities(this.page).subscribe(
          (data:any)=>{
            this.cities = data['content'];
        this.pages = new Array(data['totalPages']);}

        )

      },
      (error)=>{
        console.log(error.error.message);
      }
    )
  }

 handleKeyUp(e: { keyCode: number; }, cityName:string){
  if(e.keyCode === 13){
     this.onClickSubmit(cityName);
  }
}

}
