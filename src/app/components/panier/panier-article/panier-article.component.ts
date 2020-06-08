import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { MessengerService } from 'src/app/services/messenger.service';
import { PanierComponent } from '../panier/panier.component';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { PanierService } from 'src/app/services/panier.service';


@Component({
  selector: 'app-panier-article',
  templateUrl: './panier-article.component.html',
  styleUrls: ['./panier-article.component.css']
})
export class PanierArticleComponent implements OnInit {

  @Input() cartItems: any
  article: Article = {};

  @Output() eventadd = new EventEmitter<any>();
  @Output() eventminus = new EventEmitter<any>();

  constructor(private message: MessengerService,private panierService: PanierService) { }

  ngOnInit(): void {
  }

  handledeleteToCart(article: Article) {
    this.panierService.deleteCartArticle(article.id).subscribe(()=> {
      this.message.sendMessage(article)
    });

    // this.message.sendMessage([article, 0])
  }

  plus(article: Article) {
    this.eventadd.emit(article);
  }

  minus(article: Article) {
    this.eventminus.emit(article);
  }

}



