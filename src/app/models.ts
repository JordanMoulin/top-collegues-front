export enum Avis {
    AIMER = "Aimer",
    DETESTER = "Detester"
}

export class Collegue {
    img: string;
    pseudo: string;
    score: number;

    constructor(pseudo, score, img) {
        this.img = img;
        this.pseudo = pseudo;
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