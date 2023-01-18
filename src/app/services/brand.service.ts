import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BrandService {
  ev: EventEmitter<any> = new EventEmitter<any>();
  updateListEmitter: EventEmitter<any> = new EventEmitter<any>();

  //private url = "http://localhost:4000/api/";
  constructor(private http: HttpClient) {}

  getBrands() {
    return this.http.get<any>(`http://localhost:4000/api/brands/getAllBrands`);
  }
  getPictures() {
    return this.http.get<any[]>(`http://localhost:4000/api/pictures/getAllPictures`);
  }
  getBrandByID(id: any) {
    return this.http.get<any>(`https://mreyetback.herokuapp.com/v-1/brand/${id}`);
  }

  // tslint:disable-next-line:no-shadowed-variable
  addBrand(brand: any) {
    return this.http.post(`http://localhost:4000/api/brands/createNewBrand`, brand);
  }

  // tslint:disable-next-line:no-shadowed-variable
  updateBrand(id: any, brand: any) {
    return this.http.put(`http://localhost:4000/api/brands/updateBrand/${id}`, brand);
  }

  deleteBrand(id: any) {
    return this.http.delete(`http://localhost:4000/api/brands/deleteBrand/${id}`);
  }
  getLastBrand() {
    return this.http.get<any>(`http://localhost:4000/api/brands/lastBrand`);
  }
}
