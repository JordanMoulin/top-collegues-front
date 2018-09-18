import { Component, OnInit } from '@angular/core';
import { Vote, Avis, Collegue } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  votes: Array<Vote>;
  vote1: Vote
  newVote: Array<Vote>
  vote: Vote;
  constructor() {
    this.votes = [new Vote(Avis.AIMER, new Collegue("Irvin", 500, "https://blogdev01.files.wordpress.com/2014/01/facebookprofilepic.jpg")),
    new Vote(Avis.AIMER, new Collegue("Pénélope", 500, "https://blogdev01.files.wordpress.com/2014/01/facebookprofilepic.jpg")),
    new Vote(Avis.DETESTER, new Collegue("Rose-Marie", 500, "https://blogdev01.files.wordpress.com/2014/01/facebookprofilepic.jpg")),
    new Vote(Avis.DETESTER, new Collegue("Marie-Rose", 500, "https://blogdev01.files.wordpress.com/2014/01/facebookprofilepic.jpg"))]
  }

    ngOnInit() {
    }

  }
