import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {
  @Output() avis:EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  quandOnAime() {
    this.avis.emit("Aimer");
  }
  quandOnDeteste() {
    this.avis.emit("Detester");
  }
  ngOnInit() {
  }
}
