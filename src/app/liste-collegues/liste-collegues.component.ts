import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  searchText: string;
  collegues: Collegue[] = [];
  err: string;

  constructor(private _postSrv: CollegueService) { }
  ngOnInit() {
    this._postSrv
      .listerCollegues()
      .subscribe(
        tableauCols => this.collegues = tableauCols,
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
