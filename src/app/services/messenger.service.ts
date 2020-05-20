import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject= new Subject()

  constructor() { }

  sendMessage(article){
    console.log(article)
    this.subject.next(article)
 }

  getMessage(){
    return this.subject.asObservable()
  }


}
