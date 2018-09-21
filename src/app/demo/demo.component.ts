import { Component, OnInit } from '@angular/core';
import { AvisComponent } from '../avis/avis.component';
import { Collegue } from '../models';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
   
   constructor() {}
 
   ngOnInit() {
     
 }

}
