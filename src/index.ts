import "./components/export"
import Start from "./screens/Start";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const start = this.ownerDocument.createElement('my-start');
        this.shadowRoot?.appendChild(start);
    }
}

customElements.define('app-container', AppContainer)