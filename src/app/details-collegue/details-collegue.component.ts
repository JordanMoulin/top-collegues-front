import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { ActivatedRoute } from '@angular/router';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-details-collegue',
  templateUrl: './details-collegue.component.html',
  styleUrls: ['./details-collegue.component.scss']
})
export class DetailsCollegueComponent implements OnInit {

  @Input() avis: string;
  pseudo: string;
  collegue: Collegue = new Collegue("","","","","","","");
  err: string;

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute, private _postSrv: CollegueService) { 
    // récupération du paramètre pseudo
    this.pseudo = route.snapshot.paramMap.get("pseudo")
  }

  ngOnInit() {
    this._postSrv
       .listerUnCollegue(this.pseudo)
       .subscribe(
        Collegue => this.collegue = Collegue);
  }

  afficherAvis(tavis: string) {
    this._postSrv
      .donnerUnAvis(this.collegue, tavis.toUpperCase())
      .subscribe(col => {
        if (tavis === Avis.AIMER) {
          this.collegue.score = col.score
          this.avis = "Vous avez cliqué sur 'J'aime'";
        }

        else if (tavis === Avis.DETESTER) {
          this.collegue.score = col.score
          this.avis = "Vous avez cliqué sur 'Je déteste'";
        }
      })
  }
}
