import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import {Subject} from 'rxjs';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject= new Subject()

  constructor() { }

myObservables: any = [];
  
  sendMessage(myObservables){
    console.log('myobsercable=');
    console.log(myObservables)
    this.subject.next(myObservables)
 }

//   sendMessage(article){
//     console.log(article)
//     this.subject.next(article)
//  }

  getMessage(){
    return this.subject.asObservable()
  }


}
