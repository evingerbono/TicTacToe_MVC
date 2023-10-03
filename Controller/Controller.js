import Model from "../Model/Model.js";
import Jatek from "../View/JatekView.js";

class Controller {
    constructor() {
        this.MODEL = new Model();
        for (let index = 0; index < 9; index++) {
            this.JATEKMEZO = new Jatek($(".jatekT"),index);  
        }
        $(window).on("kivalaszt", (event) => {  
            this.MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(this.MODEL.getErtek());

            if (this.MODEL.getvegeVanE()!=="Tovább") {
                console.log(this.MODEL.getvegeVanE());
            }
        });
    }
}
export default Controller;