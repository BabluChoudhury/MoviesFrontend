import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-dmca',
  templateUrl: './dmca.component.html',
  styleUrls: ['./dmca.component.css']
})
export class DMCAComponent implements OnInit{
  ngOnInit(): void {
    this.loader.start()
    this.loader.stop()
  }
  constructor(private loader:NgxUiLoaderService){ }

}