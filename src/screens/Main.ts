import { changescreen } from "../store/actions";
import { dispatch } from "../store/index";
import * as components from "../components/export"
import firebase from "../utils/firebase";
import Tile, { Attribute} from "../components/Tile/Tile"

export default class Start extends HTMLElement {

    tiles: any = []

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    async connectedCallback(){
        const firebaseData = await firebase.getInfo;

        firebaseData.forEach((tile: any) => {
            const newtile = this.ownerDocument.createElement("my-tile") as Tile;
            newtile.setAttribute(Attribute.color, tile.color);
            newtile.setAttribute(Attribute.letter, tile.letter);
            newtile.setAttribute(Attribute.clicked, tile.clicked)
            newtile.setAttribute(this.id, tile.id);
            const id = tile.id
            this.tiles.push(newtile);

            newtile.addEventListener(("click"), (id) => {
                this.clicked(id)
            })
        })

        this.render()
    }

    clicked(id: any){
        const firebaseData = await firebase.getInfo;

        //buscar el tile con el id y checar si esta clickeadp, si no lo está se le cambian los atributos 
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <div></div>
            `

            const div = this.ownerDocument.querySelector("div");

            this.tiles.forEach((tile: any) => {
                div?.appendChild(tile)
            })
        }
    }
}

customElements.define("my-start", Start)