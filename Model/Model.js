class Model{
    #lista=[];
    #id;
    #allapot;
    constructor(){
        this.#allapot="X";
    }
    setAllapot(){
        if (this.#allapot==="X") {
            this.#allapot="O";
        } else {
            this.#allapot="X";
        }
    }
    getErtek(){
        return this.#allapot;
    }
}
export default Model;