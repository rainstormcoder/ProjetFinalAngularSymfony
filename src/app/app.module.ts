import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { MarqueComponent } from './components/marque/marque.component';

import { FicheComponent } from './components/fiche/fiche.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './services/article.service';
import { MiniPanierComponent } from './components/panier/mini-panier/mini-panier.component';
import { PanierComponent } from './components/panier/panier/panier.component';
import { PanierArticleComponent } from './components/panier/panier-article/panier-article.component';
import { GaleryArticleComponent } from './components/galery-article/galery-article.component';
import { FormsModule } from '@angular/forms';
import { CommandeComponent } from './components/panier/commande/commande.component';
import { IdentificationComponent } from './components/panier/identification/identification.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MarqueComponent,
    FicheComponent,
    HomeComponent,
    ArticleComponent,
    MiniPanierComponent,
    PanierComponent,
    PanierArticleComponent,
    GaleryArticleComponent,
    CommandeComponent,
    IdentificationComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
