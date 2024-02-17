import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesApiService } from 'src/app/Service/movies-api.service';

@Injectable({
  providedIn:'platform'
})
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  movie:any
  val:any
  constructor(private MoviesApi:MoviesApiService,private router:Router ){ }
  ngOnInit(): void {
    
      // localStorage.removeItem('search')
      this.getMov()
  }
  getMov(){
    this.val=localStorage.getItem('search')
    const data={"name":this.val}
      this.MoviesApi.getByName(data).subscribe((result:any)=>{
        this.movie = result.result
      })
      console.log(this.movie);
  }
  toRedirect(name:any){
      this.router.navigateByUrl(name)
  }
}
