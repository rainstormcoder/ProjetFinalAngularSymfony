import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../interfaces/client';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlApi = 'http://localhost:8000/api/client';
  constructor(private http: HttpClient) { }

  getCurrentUser(client: Client) {
    return this.http.get<Array<Client>>(this.urlApi + '?email=' + client.compteclient['email']).pipe(map(elt => elt['hydra:member']));
  }  
}

