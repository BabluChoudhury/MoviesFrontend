import { Component,OnInit, Input } from '@angular/core';
import { MoviesApiService } from 'src/app/Service/movies-api.service';
import { fromEvent } from 'rxjs';

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
    this.currentPage = localStorage.getItem('currentPage') || 1;
      this.movieDetail.getMovies().subscribe((result:any)=>{
        this.movies=result.result.reverse()
        this.totalItems=this.movies.leangth
      })
  }
  onPageChange(pageNumber: any): void {
    this.currentPage = pageNumber;
    localStorage.setItem('currentPage', this.currentPage.toString());
  }
  constructor(private movieDetail:MoviesApiService){
    fromEvent(window, 'beforeunload').subscribe(() => {
        localStorage.removeItem('currentPage');
    });
  }

}

