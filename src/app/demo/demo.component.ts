import { Component, OnInit } from '@angular/core';
import { AvisComponent } from '../avis/avis.component';
import { Collegue } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  
  collegues:Collegue[];

  constructor() { 
    const col1 = new Collegue();
    col1.pseudo = "Flora";
    col1.score = 666;

    const col2 = new Collegue();
    col2.pseudo = "Victor";
    col2.score = 14570;

    const col3 = new Collegue();
    col3.pseudo = "Lucile";
    col3.score = 4980;

    const col4 = new Collegue();
    col4.pseudo = "Scampi";
    col4.score = 798;

    const col5 = new Collegue();
    col5.pseudo = "Bigorneau";
    col5.score = 5;

    const col6 = new Collegue();
    col6.pseudo = "Mâchicoulis";
    col6.score = 9999999;

    this.collegues = [col1, col2, col3, col4, col5, col6];
   }
  ngOnInit() {
  }

}
