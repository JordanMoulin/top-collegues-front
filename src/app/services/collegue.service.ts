import { Injectable } from '@angular/core';
import { Collegue, Avis, formCollegue } from '../models';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  private _superBus = new Subject<string>();

  get superBus(): Observable<string> {
    return this._superBus.asObservable();
  }

  constructor(private _http: HttpClient) { }

  listerCollegues(): Observable<Collegue[]> {
    return this._http
      .get(URL_BACKEND + "collegues/")
      .pipe(
        map((data: any[]) =>
          data.map(collegue =>
            new Collegue(collegue.pseudo, collegue.nom, collegue.prenom, collegue.email, collegue.adresse, collegue.score, collegue.photo)
          )
        )
      );
  }

  donnerUnAvis(unCollegue: Collegue, avis: String): Observable<Collegue> {
    if(avis === "AIMER"){
      this._superBus.next(`J'aime ${unCollegue.pseudo}`);
    }
    else if(avis === "DETESTER"){
      this._superBus.next(`Je n'aime pas ${unCollegue.pseudo}`);
    }
    
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resultat = this._http.patch(URL_BACKEND + "collegues/" + unCollegue.pseudo, "{'avis':" + avis + "}", httpOptions);
    return resultat;
  }

  listerUnCollegue(pseudo: String): Observable<Collegue> {
    return this._http
      .get(URL_BACKEND + "collegues/" + pseudo)
      .pipe(
        map((collegue: any) => new Collegue(collegue.pseudo, collegue.nom, collegue.prenom, collegue.email, collegue.adresse, collegue.score, collegue.photo)
        )
      );
  }

  trouverUnCollegue(monForm: formCollegue): Observable<Collegue> {
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resultat = this._http.post(URL_BACKEND + "collegues/nouveau", monForm, httpOptions);
    return resultat;
  }
}
