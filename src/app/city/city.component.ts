import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  //public city:any;
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
        console.log(data);
        this.cities = data.response['content'];
        console.log(this.cities);
        this.pages = new Array(data.response['totalPages']);
        console.log(this.pages);
      },
      (error)=>{
        console.log(error.error.message);
      }
    )
  }

}
