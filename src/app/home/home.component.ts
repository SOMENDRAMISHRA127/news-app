import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any = []
  totalResults: number = 0
  page: number = 1
  q: string = "All"
  language: string = "hi"
  constructor(private dataService: DataService, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.queryParams.subscribe((data: any) => {
      if (data.q)
        this.q = data.q
      if (data.language)
        this.language = data.language
      this.getAPIData()
    })
  }
  ngOnInit(): void {
  }
  getAPIData() {
    this.dataService.getNewsItems({ q: this.q, language: this.language, page: this.page }).subscribe((data: any) => {
      this.articles = data.articles
      this.totalResults = data.totalResults
    })
  }
  onScrollDown() {
    this.page++
    this.dataService.getNewsItems({ q: this.q, language: this.language, page: this.page }).subscribe((data: any) => {
      this.articles = this.articles.concat(data.articles)
    })
  }
  onUp() {
  }
}
