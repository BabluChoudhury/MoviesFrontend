import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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
  constructor(private MoviesApi:MoviesApiService,private router:Router,private loader:NgxUiLoaderService ){ }
  ngOnInit(): void {
    this.loader.start()
      this.getMov()
  }
  getMov(){
    this.loader.start()
    this.val=localStorage.getItem('search')
    const data={"name":this.val}
      this.MoviesApi.getByName(data).subscribe((result:any)=>{
        this.movie = result.result
        this.loader.stop()
      })
  }
  toRedirect(name:any,data:any){
    localStorage.setItem('id',data)
      this.router.navigateByUrl(name)
  }
}
