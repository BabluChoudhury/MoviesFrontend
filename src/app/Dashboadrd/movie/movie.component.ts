import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MoviesApiService } from 'src/app/Service/movies-api.service';

@Injectable({
  providedIn:'any'
})
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  movie:any
  id:any
  year:any
  month:any
  date:any
  ngOnInit(): void {
    this.loader.start()
    this.id=localStorage.getItem('id')
    const data={"_id":this.id}
    this.movieDetails.getById(data).subscribe((result:any)=>{
        this.movie=result.result[0]
        const dd= new Date(result.result[0].date)
        this.year=dd.getFullYear()
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ]
        this.month=months[dd.getMonth()]
        this.date=dd.getDay()
        this.loader.stop()
    })
    
  }
  getMovie(data:any){
    localStorage.setItem('link',data)
  }
  getAddress(data:any){
    localStorage.setItem('address',data)
  }
  
  constructor(private route:ActivatedRoute ,private movieDetails:MoviesApiService,private loader:NgxUiLoaderService){ }

  
}
