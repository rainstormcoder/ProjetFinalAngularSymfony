import { Component, OnInit,Input } from '@angular/core';
import { Article } from '../../interfaces/article';
import { MessengerService} from 'src/app/services/messenger.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

@Input() articleliste: Article;

constructor(private message: MessengerService) { }
  
 ngOnInit(): void {
  }

  handleAddToCart(){
    this.message.sendMessage(this.articleliste)
  }
  
  
}
