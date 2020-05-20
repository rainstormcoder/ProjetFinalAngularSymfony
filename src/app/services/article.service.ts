import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url = 'http://localhost:555/articles/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<Article>>(this.url);
  }
  getArticleById(id: number) {
    return this.http.get<Article>(this.url + id);
  }
}
