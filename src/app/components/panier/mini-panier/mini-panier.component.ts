import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Article } from 'src/app/interfaces/article';
import { PanierComponent } from '../panier/panier.component';
import { PanierService } from 'src/app/services/panier.service';
import { PanierArticle } from 'src/app/interfaces/panier-article';

@Component({
  selector: 'app-mini-panier',
  templateUrl: './mini-panier.component.html',
  styleUrls: ['./mini-panier.component.css']
})
export class MiniPanierComponent implements OnInit {
  cartItems = [];
  panierTotal = 0;
  nbArticle=0;

  constructor(private message: MessengerService, private panierService: PanierService) { }

  ngOnInit(): void {
  this.handleSubcription();
  this.loadPanierArticle();
  }

  loadPanierArticle(){
    this.panierService.getCartArticle().subscribe((items: PanierArticle[]) =>{
      this.cartItems=items;
      this.calcultotalmini();
    })
  }

  handleSubcription(){
    this.message.getMessage().subscribe((article: Article)=>{
    this.loadPanierArticle();
   } )
}

  calcultotalmini() {
    this.panierTotal = 0;
    this.nbArticle=0;
    this.cartItems.forEach(article => {
      this.panierTotal += (article.quantite * article.prix)
      this.nbArticle+=article.quantite;
    });
  }

  // addMini(article: Article) {
  //   this.cartItems.push({
  //     id: article.id,
  //     quantite: 1,
  //     prix: article.prix
  //   });
  //   this.calcultotalmini();
  //   console.log(this.cartItems);
  // }

  // deleteMini(id: number, op: number) {
  //   for (let cartItem of this.cartItems) {
  //     console.log(cartItem);
  //     if (cartItem.id === id) {
  //         console.log('mini find');
  //           this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
  //           if(op==1) 
  //             break;
  //      }
  //   }
  // this.calcultotalmini();
  // }


}