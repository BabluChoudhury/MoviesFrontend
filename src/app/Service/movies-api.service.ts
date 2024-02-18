import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private http:HttpClient) { }
   getMovies(){
    return this.http.get("https://movies-backend-murex.vercel.app/v1/movies")
   }
   getByName(name:any){
    return this.http.post("https://movies-backend-murex.vercel.app/v1/movie",name)
   }
}
