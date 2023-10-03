class Jatek {
    #index;
    constructor(szuloElem, index) {
        this.szuloElem = szuloElem;
        this.#index = index;
        this.kattinthato = true;
        this.#htmlOsszerak(this.#index);
        this.egyElem = $(".kocka:last-child");
        this.pElem = this.egyElem.children("p:last-child");
        this.egyElem.on("click", () => {
            if (this.kattinthato) {
                this.#esemenyTrigger("kivalaszt");
                this.kattinthato=false;
            }
        });
    }

    #htmlOsszerak(index) {
        let txt = "";
        txt += `<div class="kocka" id=${index}><p></p></div>`;
        this.szuloElem.append(txt);
    }

    setErtek(jel) {
        this.pElem.html(jel);
    }
    getIndex() {
        return this.#index;
    }

    #esemenyTrigger(esemenyNev) {
        //console.log(esemenyNev);
        const esemeny = new CustomEvent(esemenyNev, { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Jatek;