import { Component, OnInit,Input } from '@angular/core';
import { Article } from '../../interfaces/article';
import { MessengerService } from 'src/app/services/messenger.service';
import { PanierService } from 'src/app/services/panier.service';
import { PanierArticle } from 'src/app/interfaces/panier-article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

@Input() articleliste: Article;

  
constructor(private message: MessengerService, private panierService: PanierService) { }
  
 ngOnInit(): void {
  }

  handleAddToCart(){
    console.log(this.articleliste)

    var articleForPanier= {
      articleId:this.articleliste.id,
      titre:this.articleliste.titre,
      quantite:1,
      prix:this.articleliste.prix,
      reference:this.articleliste.reference,
      stock:this.articleliste.quantite,
    }

    console.log(articleForPanier)

    this.panierService.addCartArticle(articleForPanier).subscribe(()=> {
      this.message.sendMessage(this.articleliste)
      }) 
  }

  // handleAddToCart(){
  //   this.message.sendMessage(this.articleliste)
  // this.message.sendMessage([this.articleliste,1])
  // }
  
  
}
