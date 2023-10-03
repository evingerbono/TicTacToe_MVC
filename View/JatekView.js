class Jatek{
    
    constructor(szuloElem){
        this.szuloElem=szuloElem;
        this.#htmlOsszerak();
        this.egyElem=$("div:last-child");
        this.pElem=this.egyElem.children("p:last-child");
        this.egyElem.on("click",()=>{
            this.#esemenyTrigger("kivalaszt");
        })
    }

    #htmlOsszerak(){
        let txt= "";
        txt+=`<div class="jatekT"><p></p></div>`
        this.szuloElem.html(txt);
    }

    setErtek(jel){
        this.pElem.html(jel);
    }

    #esemenyTrigger(esemenyNev) {
        console.log(esemenyNev);
        const esemeny = new CustomEvent(esemenyNev);
        window.dispatchEvent(esemeny);
    }
}
export default Jatek;