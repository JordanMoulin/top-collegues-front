import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  @Input() avis: string;

  constructor(private _postSrv: CollegueService) {
  }

  afficherAvis(tavis: string) {
    this._postSrv
      .donnerUnAvis(this.collegue, tavis.toUpperCase())
      .then(col => {
        if (tavis === Avis.AIMER) {
          this.collegue.score = col.score
          this.avis = "Vous avez cliqué sur 'J'aime'";
        }

        if (tavis === Avis.DETESTER) {
          this.collegue.score = col.score
          this.avis = "Vous avez cliqué sur 'Je déteste'";
        }
      });
  }

  ngOnInit() {
  }

}
