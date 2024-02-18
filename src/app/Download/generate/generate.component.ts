import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit{
  active=false
  click=false
  count=15
  path=this.router.url  
  ngOnInit(): void {
    this.router.navigateByUrl(`${this.path}`)
  }
constructor(private router:Router){}
  getScroll(data:any){
    this.router.navigateByUrl(`${this.path}#`+data)
    this.click=true
    setInterval(()=>{
      if(this.count > 0){
        this.count -=1
      }
      else{
        this.click=false
        this.active=true
        this.count=15
      }
    },1000)
  }
}
