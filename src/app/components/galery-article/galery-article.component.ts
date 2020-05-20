import { Component, OnInit,Input} from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-galery-article',
  templateUrl: './galery-article.component.html',
  styleUrls: ['./galery-article.component.css']
})
export class GaleryArticleComponent implements OnInit {
  
  articles: Array <Article>;
  article:Article={};
  
  constructor(private articleService: ArticleService) { }
    
   ngOnInit(): void {
     this.articleService.getAll().subscribe(res=>this.articles=res);
    }
  
  }
