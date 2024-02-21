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
  faSearch = faSearch
  constructor(private router: Router, private searchComponent: SearchComponent) { }
  searchData(data: any) {
    if (data.name === "" || data.name === undefined || data.name === null) {
      this.router.navigateByUrl("")
    }
    else {
      const str: String = data.name;
      const val = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
      localStorage.setItem('search', val)
      this.router.navigateByUrl("/search")
      this.searchComponent.getMov()
    }
  }
}
