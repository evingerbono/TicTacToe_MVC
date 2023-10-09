class Info {
    constructor(szuloElem) {
        this.szuloElem = szuloElem;
        this.#htmlOsszerak();
        this.infoElem = $(".infoPanel:last-child");
    }

    #htmlOsszerak() {
        let txt = `<div class="infoPanel">Következő játékos: <span>X</span></div>`;
        this.szuloElem.append(txt);
    }

    setJatekos(jel) {
        this.infoElem.find("span").html(jel);
    }

    setGyoztes(jel) {
        this.infoElem.html(jel + " nyert!");
    }

    setDontetlen() {
        this.infoElem.html("Döntetlen!");
    }
}
export default Info;
