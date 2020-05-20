import { Component, OnInit, Input } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-mini-panier',
  templateUrl: './mini-panier.component.html',
  styleUrls: ['./mini-panier.component.css']
})
export class MiniPanierComponent implements OnInit {

  cartItems=[];
  panierTotal=0;

  constructor(private message: MessengerService) { }

  ngOnInit(): void {
    this.message.getMessage().subscribe((article: Article)=>{
    
      this.cartItems.push({
        id:article.id,
        titre: article.titre,
        quantite: 1,
        prix: article.prix
      })
      this.panierTotal=0;
      this.cartItems.forEach(article => {
        this.panierTotal+=(article.quantite*article.prix)     
          });
  
    }) 
  }

}
