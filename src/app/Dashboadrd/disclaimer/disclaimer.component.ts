import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit{
  ngOnInit(): void {
    this.loader.start()
    this.loader.stop()
  }
  constructor(private loader:NgxUiLoaderService){ }

}