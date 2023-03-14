class ButtonCount extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        const shadow_root = this.attachShadow({ mode:"open" });
        const button = document.createElement("button");
        button.textContent = `Times Clicked: ${this.count}`;
        button.addEventListener("click", () => {
            this.count++;
            button.textContent = `Times Clicked: ${this.count}`;
        });
        shadow_root.appendChild(button);
    }
}
window.customElements.define("button-count", ButtonCount);