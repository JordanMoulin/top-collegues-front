import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() avis:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  quandOnAime() {
    this.avis.emit("Vous avez cliqué sur J'aime");
  }
  quandOnDeteste() {
    this.avis.emit("Vous avez cliqué sur Je déteste");
  }


}
