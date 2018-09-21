import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.scss']
})
export class VotreDernierAvisComponent implements OnInit, OnDestroy {

  abonnementSuperBus: Subscription;
  msg: string = "Aucun vote pour le moment";

  constructor(private _colSrv: CollegueService) {}

  ngOnInit() {
    this.abonnementSuperBus = this._colSrv.superBus.subscribe(message => {
      this.msg = message;
    });
  }
  ngOnDestroy() {
    this.abonnementSuperBus.unsubscribe();
  }
}
