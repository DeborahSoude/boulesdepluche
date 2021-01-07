import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import firebase from 'firebase';

import { AppComponent } from './app.component';
import { SalonComponent } from './salon/salon.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { SanteComponent } from './sante/sante.component';
import { MissionsComponent } from './missions/missions.component';
import { MembresComponent } from './membres/membres.component';
import { DetailsMembresComponent } from './details-membres/details-membres.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HorlogeComponent } from './horloge/horloge.component';


import { AccueilComponent } from './accueil/accueil.component';
import { ClickerComponent } from './clicker/clicker.component';
import { DetailsPartenairesComponent } from './details-partenaires/details-partenaires.component';
import { QuizComponent } from './quiz/quiz.component';

// complétez avec vos propres identifiants
const firebaseConfig = {
  apiKey: "AIzaSyBiowCeBqkLOwvz5QFkKkIHciHIcnRw9Dc",
  authDomain: "les-boules-de-p-luches.firebaseapp.com",
  projectId: "les-boules-de-p-luches",
  storageBucket: "les-boules-de-p-luches.appspot.com",
  messagingSenderId: "875071235836",
  appId: "1:875071235836:web:f65dedcb45b06ef0c19979"
};

// initialisez Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SalonComponent,
    PartenairesComponent,
    SanteComponent,
    MissionsComponent,
    MembresComponent,
    DetailsMembresComponent,
    MenuComponent,
    HorlogeComponent,
    AccueilComponent,
    ClickerComponent,
    DetailsPartenairesComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
