import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search:string = ""
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getData(event:any){
    this.search = event.target.value
  }
  postData(event:any){
    event.preventDefault()
    this.router.navigate(['/'],{ queryParams: {q:this.search} })
  }
}
