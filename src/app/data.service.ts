import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}
  getNewsItems(obj:any){
    return this.http.get(`https://newsapi.org/v2/everything?q=${obj.q}&language=${obj.language}&page=${obj.page}&pageSize=20&language=hi&apiKey=6c6ae40defa34a7c9acd1c7b944be762`)
  }
}
