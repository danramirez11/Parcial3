import { changescreen } from "../store/actions";
import { dispatch } from "../store/index";


export default class Start extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render()

        const button = this.ownerDocument.querySelector("button");
        button?.addEventListener("click", this.continue)
    }

    continue(){
        dispatch(changescreen("MAIN"))
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h1>Welcome to polloc's board</h1>
            <input type="text" placeholder="Username">
            <input type="text" placeholder="Color">
            <input type="text" placeholder="Letter">
            <button>Continue</button>
            `
        }
    }
}

customElements.define("my-start", Start)