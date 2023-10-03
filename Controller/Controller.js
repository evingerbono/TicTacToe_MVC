import Model from "../Model/Model.js";
import Jatek from "../View/JatekView.js";

class Controller {
    constructor() {
        this.MODEL = new Model();
        this.JATEKMEZO = new Jatek($("article"));

        $(window).on("kivalaszt", () => {
            this.MODEL.setAllapot();
            this.JATEKMEZO.setErtek(this.MODEL.getErtek());
        })
    }
}
export default Controller;