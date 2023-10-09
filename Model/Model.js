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
        if (this.#lepesSzam < 9) {
            return "Tovább";
        }
    
        let vEll = this.#vizszintesGyozelem();
        if (vEll.indexOf("OOO") >= 0) {
            return "O nyert";
        } else if (vEll.indexOf("XXX") >= 0) {
            return "X nyert";
        }
        if (this.#lepesSzam === 9) {
            return "Döntetlen";
        } else {
            return "Tovább";
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