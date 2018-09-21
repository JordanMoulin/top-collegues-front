import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCollegueComponent } from './details-collegue/details-collegue.component';
import { FormsModule }   from '@angular/forms';
import { AjouterUnCollegueComponent } from './ajouter-un-collegue/ajouter-un-collegue.component';
import { ScorePipe } from './pipes/score.pipe';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant accueil
  { path: 'demo', component: DemoComponent },  // /demo affiche le composant demo
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route accueil par défaut
  { path: 'collegues/nouveau', component: AjouterUnCollegueComponent },
  { path: 'collegues/:pseudo', component: DetailsCollegueComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    HistoriqueVotesComponent,
    MenuComponent,
    AccueilComponent,
    DetailsCollegueComponent,
    AjouterUnCollegueComponent,
    ScorePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
