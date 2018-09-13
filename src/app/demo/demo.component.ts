import { Component, OnInit, Input } from '@angular/core';
import { AvisComponent } from '../avis/avis.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  @Input() avis:string;

  constructor() { }

  afficherAvis(tavis:string){
    this.avis=tavis;
  }

  ngOnInit() {
  }

}
