export enum Avis {
    AIMER = "Aimer",
    DETESTER = "Detester"
}

export class Collegue {
    pseudo: string;
    nom: string;
    prenom: string;
    email: string;
    adresse: string;
    score: number;
    img: string;

    constructor(pseudo,nom,prenom,email,adresse, score, img) {
        this.img = img;
        this.pseudo = pseudo;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.adresse = adresse;
        this.score = score;
    }
}

export class Vote {
    avis: Avis;
    collegue: Collegue;

    constructor(avis, collegue) {
        this.avis = avis;
        this.collegue = collegue;
    }
}