import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../interfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  article:Article={};
  id: number;
  photo: number;
  num:number;

  imageSrc = '../assets/images/'+this.route.snapshot.params['photo']+'_0.jpg';
 
  // messageText = '';
  
  constructor(private articleService: ArticleService, 
    private route:ActivatedRoute, 
    private router: Router,
    private message: MessengerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(response => {
      this.id = +response.get('id');
      this.articleService.getArticleById(this.id).subscribe(eq => this.article = eq);
    });

    

    if (this.route.snapshot.params['id']) {
      console.log('id: ', this.route.snapshot.params['id']);
    }
    if (this.route.snapshot.params['photo']) {
       console.log('photo: ', this.route.snapshot.params['photo']);
      this.photo=this.route.snapshot.params['photo'];
    } 
    

 }
 imageButtons = [
 {src:'../assets/images/' + this.route.snapshot.params['photo'] + '_0.jpg', name: 'image-0'},
 {src:'../assets/images/' + this.route.snapshot.params['photo'] + '_1.jpg', name: 'image-1'}, 
 {src:'../assets/images/' + this.route.snapshot.params['photo'] + '_2.jpg', name: 'image-2'},
 {src:'../assets/images/' + this.route.snapshot.params['photo'] + '_3.jpg', name: 'image-3'},
]  
 onClick(imageNameObject) {
  this.imageSrc = imageNameObject.src;
  // this.messageText = imageNameObject.name;
}

handleAddToCart(){
  this.message.sendMessage(this.article)
}

}