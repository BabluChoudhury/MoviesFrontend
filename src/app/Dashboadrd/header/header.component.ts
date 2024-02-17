import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faSearch=faSearch
  constructor(private router:Router,private searchComponent:SearchComponent){ }
  searchData(data:any){
    if(data.name ==="" || data.name === undefined || data.name === null){
      this.router.navigateByUrl("")
    }
    else{
    localStorage.setItem('search',data.name)
      this.router.navigateByUrl("/search")
      this.searchComponent.getMov()
    }
  }
}
