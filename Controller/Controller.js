import Model from "../Model/Model.js";
import Jatek from "../View/JatekView.js";
import Info from "../View/Info.js";

class Controller {
    constructor() {
        this.MODEL = new Model();

        this.INFO = new Info($(".infoP"));

        for (let index = 0; index < 9; index++) {
            this.JATEKMEZO = new Jatek($(".jatekT"), index);  
        }
        $(window).on("kivalaszt", (event) => {  
            this.MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(this.MODEL.getErtek());

            this.INFO.setJatekos(this.MODEL.getErtek());

            const eredmeny = this.MODEL.getvegeVanE();
            if (eredmeny === "O nyert") {
                this.INFO.setGyoztes("O");
            } else if (eredmeny === "X nyert") {
                this.INFO.setGyoztes("X");
            } else if (eredmeny === "Döntetlen") {
                this.INFO.setDontetlen();
            }
        });
    }
}
export default Controller;
