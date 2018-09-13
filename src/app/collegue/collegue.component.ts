import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  collegue:Collegue;

  constructor() { 
    this.collegue = new Collegue();
    this.collegue.pseudo = "Flora"
    this.collegue.score = 666;
  }

  ngOnInit() {
  }

}
