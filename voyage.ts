class Sejour {

    constructor(private _nom: string, private _prix: number) {

    }
    get nom() {
        return this._nom;
    }
    set nom(value: string) {
        this._nom = value;
    }
    get prix() {
        return this._prix;
    }
    set prix(value: number) {
        this._prix = value;
    }

}
class SejourService {
    static SEARCH_NO_RESULT = `La recherche n'a pas donnée de résultat`;

    public sejours: Array<Sejour>;

    constructor() {
        this.sejours = new Array<Sejour>();
        this.sejours.push(new Sejour("Bahamas", 4000));
        this.sejours.push(new Sejour("Îles vierges Britaniques", 2500));
        this.sejours.push(new Sejour("Guadeloupe", 1200));
        this.sejours.push(new Sejour("Corse", 9000));

    }
    searchByName(value: string): Sejour {
        let result!: Sejour;
        let trouvee: boolean = false;
        this.sejours.forEach((element) => {
            if (element.nom == value) {
                trouvee = true;
                result = element;
            }

        });
        if (trouvee) { return result; }
        else {
            throw new Error(SejourService.SEARCH_NO_RESULT);
        }
    }
}
let sejour = new SejourService();
try {
    console.log(sejour.searchByName("Guadeloupe"));
    console.log(sejour.searchByName("Paris"));

} catch (error) {
    console.log(sejour.searchByName("Bahamas"));


}
