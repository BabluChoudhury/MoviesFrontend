import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private http:HttpClient) { }
   getMovies(){
    return this.http.get("http://localhost:3000/v1/movies")
   }
   getByName(name:any){
    return this.http.post("http://localhost:3000/v1/movie",name)
   }
}
