import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

constructor(private message: MessengerService) { }

cartItems=[
// {id : 1, titre : 'ours Brun', prix : 5, quantite : 2},
// {id : 15, titre : 'Lapin Blanc', prix : 2, quantite : 1},
// {id : 3, titre : 'Chien Brun', prix : 4, quantite : 5}
];

panierTotal=0
fraisport=0
difference=0
grandTotal=0

  ngOnInit(): void {
this.message.getMessage().subscribe((article: Article)=>{
    this.addArticleToPanier(article)
 })  
//  this.message.getMessage().subscribe((article: Article)=>{
//   this.deleteArticleToPanier(article)
// }) 

}
 addArticleToPanier(article: Article){

  let articleExist=false;

  for(let i in this.cartItems){
      if(this.cartItems[i].id===article.id){
        this.cartItems[i].quantite++;
        articleExist=true;
      break;
      }
  }
    if(!articleExist){  
      this.cartItems.push({
        id:article.id,
        titre: article.titre,
        quantite: 1,
        prix: article.prix}) 
  }

  this.panierTotal=0;
  this.grandTotal=0;
  this.cartItems.forEach(article => {
    this.panierTotal+=(article.quantite*article.prix)     
      });

  if(this.panierTotal >= 36){ this.fraisport=0}
  else {this.fraisport=6.9}

  if(this.panierTotal < 36){this.difference= 36 - this.panierTotal}
  this.grandTotal=this.panierTotal + this.fraisport
}

deleteArticleToPanier(article:Article){
  this.cartItems = this.cartItems.filter(({id}) => id !== article.id)

 }

}
