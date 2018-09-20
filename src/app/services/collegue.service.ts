import { Injectable } from '@angular/core';
import { Collegue,Avis, formCollegue } from '../models';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues():Promise<Collegue[]>  {
    return this._http
      .get(URL_BACKEND+"collegues/")
      .toPromise()
      .then((data: any[]) => data.map(coll => new Collegue(coll.pseudo, coll.nom, coll.prenom, coll.email, coll.adresse,coll.score,coll.photo)));
  }

  donnerUnAvis(unCollegue: Collegue, avis: String): Promise<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resultat = this._http.patch(URL_BACKEND+"collegues/"+unCollegue.pseudo,"{'avis':"+avis+"}", httpOptions).toPromise();
    return resultat;
  }

  listerUnCollegue(pseudo: String): Promise<Collegue>{
    return this._http
      .get(URL_BACKEND+"collegues/"+pseudo)
      .toPromise()
      .then((coll: any) => new Collegue(coll.pseudo, coll.nom, coll.prenom, coll.email, coll.adresse,coll.score,coll.photo));
  }

  trouverUnCollegue(monForm: formCollegue){
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resultat = this._http.post(URL_BACKEND+"collegues/nouveau",monForm , httpOptions).toPromise();
    return resultat;
  }
}
