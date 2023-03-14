class ButtonCount extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        this.attachShadow({ mode:"open" });
        const button = document.createElement("button");
        button.innerHTML = `Times Clicked: ${this.count}`;
        button.addEventListener("click", () => {
            this.count++;
            button.innerHTML = `Times Clicked: ${this.count}`;
        });
        this.shadowRoot.appendChild(button);
        const style = document.createElement("style");
        style.textContent = `
        button {
            background-color: #007bff;
            border-radius: 8px;
            cursor: pointer;
            border: 1px solid #F5F5F5;
            color: #F5F5F5;
            padding: 8px 8px 8px 8px;
        }
        `;
        this.shadowRoot.appendChild(style);
    }
}
window.customElements.define("button-count", ButtonCount);