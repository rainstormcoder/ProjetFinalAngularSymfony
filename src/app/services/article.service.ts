import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  //  url = 'http://localhost:555/articles/';
  private url = 'http://localhost:8000/api/articles';


  constructor(private http: HttpClient) { }

  getAll() {
     return this.http.get<Array<Article>>(this.url);
    // return this.http.get<Array<Article>>(this.url).pipe(map(elt => elt['hydra:member']));
  }

  getWpagination(page:number){
    return this.http.get<Array<Article>>(this.url + '?page=' + page).pipe(map(elt =>elt['hydra:member']));
  }


  getArticleById(id: number) {
    return this.http.get<Article>(this.url + '/' + id);
  }
}
