import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MoviesApiService } from 'src/app/Service/movies-api.service';

@Component({
  selector: 'app-download-link',
  templateUrl: './download-link.component.html',
  styleUrls: ['./download-link.component.css']
})
export class DownloadLinkComponent implements OnInit {
  moviesLinks: any
  constructor(private router: Router, private movieDetails: MoviesApiService,private loader:NgxUiLoaderService) { }
  ngOnInit(): void {
    this.loader.start()
    const link = localStorage.getItem('link')
    const address = localStorage.getItem('address')
    const movie = decodeURIComponent((this.router.url).split("/")[1])
    console.log(movie);
    console.log(link);
    const data = { "name": movie }
    this.movieDetails.getByName(data).subscribe((result: any) => {      
      if (link === 'link1') {
        if (address === 'gdrive') {
          this.moviesLinks = result.result[0].link1.address.gdrive
        }
        else if (address === 'dlinks') {
          this.moviesLinks = result.result[0].link1.address.dlinks
        }
      }
      else if (link === 'link2') {
        if (address === 'gdrive') {
          this.moviesLinks = result.result[0].link2.address.gdrive
        }
        else if (address === 'dlinks') {
          this.moviesLinks = result.result[0].link2.address.dlinks
        }
      }
      else if (link === 'link3') {
        if (address === 'gdrive') {
          this.moviesLinks = result.result[0].link3.address.gdrive
        }
        else if (address === 'dlinks') {
          this.moviesLinks = result.result[0].link3.address.dlinks
        }
      }
      this.loader.stop()
    })

  }
}
