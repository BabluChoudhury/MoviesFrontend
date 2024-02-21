import { Component,OnInit, Input } from '@angular/core';
import { MoviesApiService } from 'src/app/Service/movies-api.service';
import { fromEvent } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
movies:any
pageSize=12
currentPage:any
totalItems:any
  ngOnInit(): void {
    this.loader.start()
    this.currentPage = localStorage.getItem('currentPage') || 1;
      this.movieDetail.getMovies().subscribe((result:any)=>{
        this.movies=result.result.reverse()
        this.totalItems=this.movies.leangth
        this.loader.stop()
      })
  }
  onPageChange(pageNumber: any): void {
    this.currentPage = pageNumber;
    localStorage.setItem('currentPage', this.currentPage.toString());
  }
  setMovieId(data:any){
    localStorage.setItem('id',data)
  }
  constructor(private movieDetail:MoviesApiService,private loader:NgxUiLoaderService){
    fromEvent(window, 'beforeunload').subscribe(() => {
        localStorage.removeItem('currentPage');
    });
  }

}

