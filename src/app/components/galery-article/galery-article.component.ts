import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-galery-article',
  templateUrl: './galery-article.component.html',
  styleUrls: ['./galery-article.component.css']
})
export class GaleryArticleComponent implements OnInit {
  articles: Array<Article>;
  article: Article = {};
  page = 1;
  totalItems: number = 12;
  pageSize: number = 12;
  fakeArray = [];
  totalPages = 1;
  isValue: number = 0;


  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articlePagination(this.page);

    this.articleService.getAll().subscribe(result => {
      this.totalItems = result['hydra:totalItems'];
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      this.fakeArray = new Array(this.totalPages);
    })

  }
  articlePagination(page: number) {
    this.articleService.getWpagination(page).subscribe(result => {
      console.log(result)
      this.articles = result;
      this.isValue = page;
    }
    );

  }
}
