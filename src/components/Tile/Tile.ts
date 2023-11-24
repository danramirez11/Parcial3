import { dispatch } from "../../store";
import { clicktile } from "../../store/actions";

export enum Attribute {
    "color" = "color",
    "letter" = "letter",
    "clicked" = "clicked"
}

export default class Tile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            color: null,
            letter: null,
            clicked: null,
        }

        return Object.keys(attrs)
    }

    connectedCallback(){

        const div = this.ownerDocument.querySelector("div");
        this.render()
    }


    attributeChangedCallback(propName: Attribute, newValue: string | undefined, oldValue: string | undefined){
        switch(propName){
            default:
                this[propName] = newValue;
                break;
        }

        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ` 
            <div class="${this.color}"></div>
            `
        }
    }
}

customElements.define("my-tile", Tile)