import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { formCollegue } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.scss']
})
export class AjouterUnCollegueComponent implements OnInit {

  err: string;
  monModel: formCollegue = new formCollegue();

  constructor(private _postSrv: CollegueService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this._postSrv
      .trouverUnCollegue(this.monModel)
      .subscribe(() => this.router.navigate(['/accueil']),
        errServeur => {
          if (errServeur.code && errServeur.message) {
            this.err = errServeur.message;
          } else {
            this.err = 'Erreur technique côté serveur';
          }
        }
      );
  }
}
