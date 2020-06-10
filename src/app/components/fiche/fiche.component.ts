import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../interfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { PanierService } from 'src/app/services/panier.service';
import { PanierArticle } from 'src/app/interfaces/panier-article';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {
  article: Article = {};
  id: number;
  photo: number;
  num: number;
  imageButtons=[];
  imageSrc = '../assets/images/' + this.route.snapshot.params['photo'] + '_0.jpg';

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private message: MessengerService,
    private panierService: PanierService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(response => {
      this.id = +response.get('id');
      this.articleService.getArticleById(this.id).subscribe(eq => 
        {this.article = eq
          console.log(eq)
        }
        );


    });

    if (this.route.snapshot.params['id']) {
      console.log('id: ', this.route.snapshot.params['id']);
    }
    if (this.route.snapshot.params['photo']) {
      console.log('photo: ', this.route.snapshot.params['photo']);
      this.photo = this.route.snapshot.params['photo'];
    }

    this.imageButtons = [
      { src: '../assets/images/' + this.route.snapshot.params['photo'] + '_0.jpg', name: 'image-0' },
      { src: '../assets/images/' + this.route.snapshot.params['photo'] + '_1.jpg', name: 'image-1' },
      { src: '../assets/images/' + this.route.snapshot.params['photo'] + '_2.jpg', name: 'image-2' },
      { src: '../assets/images/' + this.route.snapshot.params['photo'] + '_3.jpg', name: 'image-3' },
    ]
   
   

  }
  
  onClick(imageNameObject) {
    this.imageSrc = imageNameObject.src;
  }

  quantity: number = 1;

  plus() {
    if (this.article.quantite > this.quantity)
      this.quantity++;
  }
  minus() {
    if (this.quantity > 1)
      this.quantity--;
  }



  handleAddToCart() {

    var articleForPanier = {
      articleId: this.article.id,
      titre: this.article.titre,
      quantite: this.quantity,
      prix: this.article.prix,
      reference: this.article.reference,
      stock:this.article.quantite,
     }
  
  this.panierService.getCartArticleId(this.article.id).subscribe((result: PanierArticle)=>{
  console.log(articleForPanier)
  console.log(result);
    if(result['hydra:totalItems']==0){
      this.panierService.addCartArticle(articleForPanier).subscribe(() => {
        this.message.sendMessage(this.article)
          console.log('existe pas ajouter')
      })
     }
  
  else {
  var articleForPanierUp = {
      id:result['hydra:member'][0]['id'],
      articleId: this.article.id,
      titre: this.article.titre,
      quantite:result['hydra:member'][0]['quantite']+ this.quantity,
      prix: this.article.prix,
      reference: this.article.reference,
      stock:this.article.quantite,
     }
     this.panierService.updateCartArticle(articleForPanierUp).subscribe(() => {
        this.message.sendMessage(this.article)
        console.log('existe update')
      })
     }
     } )   
    this.router.navigateByUrl('/panier');

}

}



