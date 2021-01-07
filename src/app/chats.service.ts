import { Injectable } from '@angular/core';
import { Chat } from './chat';
import { Partenaires } from './partenaires';
import { CHAT } from './mock-chats';
import { PARTENAIRES } from './mock-partenaires';

import { Subject, Observable } from 'rxjs';


// Service et classe utile
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Opérateurs de RxJS
import { map, filter } from 'rxjs/operators';
// libraire utile pour le traitement de données
import * as _ from 'lodash';

// définition des headers
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  // convention dans l'API ajoutez votre identifant de base de données
private chatsUrl = 'https://les-boules-de-p-luches-default-rtdb.europe-west1.firebasedatabase.app/chats';

  subjectChat = new Subject<Chat>();
  partenaires: Array<Partenaires> = PARTENAIRES;

  constructor(private http: HttpClient) { }

  getChatFromSection(section: string = ""): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatsUrl + '/.json', httpOptions).pipe(
      map(chats => _.values(chats))
    ).pipe(
      map(chats => {
        return chats.filter(chat => 
          chat.section == section
        )
      })
    );
  }

  getPartenairesFromCategory(category: string = ""){
    let arrTemp:Array<Partenaires> = [];
    this.partenaires.forEach(element => {
      if(element.categorie == category){
        arrTemp.push(element);
      }
    });

    return arrTemp;
  }


}
