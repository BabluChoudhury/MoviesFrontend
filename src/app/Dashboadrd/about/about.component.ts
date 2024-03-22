import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  ngOnInit(): void {
    this.loader.start()
    this.loader.stop()
  }
  constructor(private loader:NgxUiLoaderService){ }

}
