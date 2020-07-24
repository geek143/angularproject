import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  /*
    Resturants Property Api
  */

  constructor(
    private http:HttpClient
  ) { }
  url = "http://localhost:3000/resturants";
  rootUrl = "http://localhost:3000/";
  getListing()
  {
    return this.http.get(this.url);
  }

  collectData(data)
  {
    return this.http.post(this.url, data);
  }

  updateResto(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }

  newUpdateResto(id,data)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }

  delListing(id)
  {
    return this.http.delete(`${this.url}/${id}`);
  }

  addUser(data)
  {
    return this.http.post(`${this.rootUrl}users`,data);
  }
}
