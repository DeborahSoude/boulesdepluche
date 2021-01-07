import { Injectable } from '@angular/core';

// Importez les modules nécessaires pour l'authentification
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authState: Boolean = false;

  constructor(private router: Router) {
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.authState = true;
      } else {
        this.authState = false;
      }
    });
  }

  auth(email: string, password: string): Promise<any> {

    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {

    firebase.auth().signOut().then(
      () => {
        this.router.navigate(['/albums'], { queryParams: { message: `Success logout` } });
      }
    );
  }

  // Return true if user is logged in
  authenticated(): Boolean {
    return this.authState == true;
  }
  
}
