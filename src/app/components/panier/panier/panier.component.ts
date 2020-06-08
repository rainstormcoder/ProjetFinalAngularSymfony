import { Component, OnInit, Output, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Article } from 'src/app/interfaces/article';
import { PanierService } from 'src/app/services/panier.service';
import { PanierArticle } from 'src/app/interfaces/panier-article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private message: MessengerService, private panierService: PanierService) { }

  cartItems = [];
  panierTotal = 0

  fraisport = 0
  difference = 0
  grandTotal = 0

  ngOnInit(): void {
    this.handleSubcription();
    this.loadPanierArticle();
  }

  handleSubcription() {
    this.message.getMessage().subscribe((article: Article) => {
      this.loadPanierArticle();
    })
  }

  loadPanierArticle() {
    this.panierService.getCartArticle().subscribe((items: PanierArticle[]) => {
     this.cartItems = items;
    this.calcultotalpanier();
    })
  }

  minusQuantity(article: Article) {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === article.id && this.cartItems[i].quantite != 1) {
        this.cartItems[i].quantite--;
        this.panierService.updateCartArticle(this.cartItems[i]).subscribe(() => {
          this.message.sendMessage(this.cartItems[i])
        })
        break;
      }
    }
  }

  addQuantity(article: Article) {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === article.id && this.cartItems[i].stock > this.cartItems[i].quantite) {
        this.cartItems[i].quantite++;
        this.panierService.updateCartArticle(this.cartItems[i]).subscribe(() => {
          this.message.sendMessage(this.cartItems[i])
        })
        break;
      }
    }
  }

  // addArticleToPanier(article: Article) {
  //   console.log('fonction add')

  // let articleExist = false;
  // let articleOutOfStock = false;

  // for (let i in this.cartItems) {
  //   console.log(article.id)
  //   console.log(article.quantite)
  //   if (this.cartItems[i].id === article.id) {
  //     if (article.quantite > this.cartItems[i].quantite) {
  //       this.cartItems[i].quantite++;
  //       console.log(this.cartItems[i].quantite)
  //       articleExist = true;
  //     }
  //     else articleOutOfStock = true;
  //     break;
  //   }
  // }
  // if (!articleExist && !articleOutOfStock) {
  //   this.cartItems.push({
  //     id: article.id,
  //     titre: article.titre,
  //     reference: article.reference,
  //     quantite: 1,
  //     stock: article.quantite,
  //     prix: article.prix
  //   })
  // }

  // }
  calcultotalpanier() {
    this.panierTotal = 0;
    this.grandTotal = 0;
    this.cartItems.forEach(article => {
      this.panierTotal += (article.quantite * article.prix)
    });

    if (this.panierTotal >= 36) { this.fraisport = 0 }
    else { this.fraisport = 6.9 }

    if (this.panierTotal < 36) { this.difference = 36 - this.panierTotal }
    this.grandTotal = this.panierTotal + this.fraisport
  }


  // deleteArticleToPanier(article: Article) {
  //   console.log('delete');
  //   for (let cartItem of this.cartItems) {
  //     if (cartItem.id === article.id) {
  //       console.log(cartItem.id);
  //       this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
  //       this.calcultotalpanier();
  //       break;
  //     }
  //   }
  // }

}
