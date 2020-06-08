import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PanierArticle } from '../interfaces/panier-article';
import { Article } from '../interfaces/article';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private urlApi = 'http://localhost:8000/api/carts';

  constructor(private http: HttpClient) { }

  getCartArticle(): Observable<PanierArticle[]>{
    return this.http.get<Array<PanierArticle>>(this.urlApi).pipe(map(elt => elt['hydra:member']));
  }

  getCartArticleId(id:number){
    return this.http.get<PanierArticle>(this.urlApi + '?articleId=' + id)
  }

  addCartArticle(article: PanierArticle){
    console.log(article)
      return this.http.post(this.urlApi,article);
  }

  updateCartArticle(article:PanierArticle){
     return this.http.put(this.urlApi+ '/' + article.id, article);
    // return this.http.put(this.urlApi+ '/' + article.id, article);
 }

  deleteCartArticle(id: number){
    return this.http.delete(this.urlApi + '/' + id);
 }

}
