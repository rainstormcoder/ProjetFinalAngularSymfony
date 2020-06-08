import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { FicheComponent } from './components/fiche/fiche.component';
import { PanierComponent } from './components/panier/panier/panier.component';
import { GaleryArticleComponent } from './components/galery-article/galery-article.component';
import { CommandeComponent } from './components/panier/commande/commande.component';
import { IdentificationComponent } from './components/panier/identification/identification.component';


const routes: Routes =[
  {path:'home', component:HomeComponent},
  {path:'articles', component:ArticleComponent},
  {path:'fiche/:id/:photo', component:FicheComponent},
  {path:'panier', component:PanierComponent},
  {path:'galery-article', component:GaleryArticleComponent},
  {path:'commande',component:CommandeComponent},
  {path:'identification',component:IdentificationComponent},
  {path:'',component:GaleryArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
