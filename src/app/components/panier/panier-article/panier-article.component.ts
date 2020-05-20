import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { MessengerService } from 'src/app/services/messenger.service'


@Component({
  selector: 'app-panier-article',
  templateUrl: './panier-article.component.html',
  styleUrls: ['./panier-article.component.css']
})
export class PanierArticleComponent implements OnInit {

  @Input() cartItems: any
  article: Article = {};

  constructor(private message: MessengerService) { }

  ngOnInit(): void {
  }

  handledeleteToCart() {
    this.message.sendMessage(this.article)
  }

}
