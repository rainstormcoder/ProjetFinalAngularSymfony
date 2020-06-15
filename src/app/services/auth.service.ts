import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompteClient } from '../interfaces/compte-client';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi = 'http://localhost:8000/authentication_token';

  constructor(private http: HttpClient) { }

  login(compteClient: CompteClient) {
    return this.http.post(this.urlApi, compteClient);
  }
}
