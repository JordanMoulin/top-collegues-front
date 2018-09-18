import { Injectable } from '@angular/core';
import { Collegue,Avis } from '../models';
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
      .get(URL_BACKEND)
      .toPromise()
      .then((data: any[]) => data.map(d => new Collegue(d.nom, d.score, d.photoUrl)));
  }

  donnerUnAvis(unCollegue: Collegue, avis: String): Promise<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resultat = this._http.patch(URL_BACKEND+unCollegue.pseudo,"{'avis':"+avis+"}", httpOptions).toPromise();
    return resultat;
  }
}
