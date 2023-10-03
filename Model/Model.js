class Model {
    #lista = [];
    #index;
    #lepesSzam
    #allapot;
    constructor() {
        this.#allapot = "X";
        this.#lepesSzam = 0;
        this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    }
    setAllapot(index) {
        if (this.#allapot === "X") {
            this.#allapot = "O";
        } else {
            this.#allapot = "X";
        }
        this.#lista[index] = this.#allapot;
        this.#lepesSzam++;
    }
    getErtek() {
        return this.#allapot;
    }
    getvegeVanE() {
        let vEll=this.#vizszintesGyozelem();
        if (vEll.indexOf("OOO">=0)) {
            return console.log("O nyert");
        }else if(vEll.indexOf("XXX">=0)){
            return console.log("X nyert");
        }
        if (this.#lepesSzam === 9) {
            return console.log("Döntetlen");
        } else {
            return console.log("Tovább");
        }
    }
    #vizszintesGyozelem() {
        let vEll="";
        for (let i= 0; i < 9; i++) {
            vEll+=this.#lista[i];
            if (i%3===2) {
                vEll+="@";
            }
        }
        console.log(vEll);
        console.log(vEll.indexOf("OOO"),vEll.indexOf("XXX"));
        return vEll;
    }
}
export default Model;