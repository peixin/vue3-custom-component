class CustomElement extends HTMLElement {
  constructor() {
    super();
    console.log("Custom element created");
  }

  connectedCallback() {
    const text = this.dataset["text"];
    console.log("Custom element added to page --> ", text);
    const div = document.createElement("div");
    div.innerText = "custom-element with text: " + text;

    this.appendChild(div);
  }
}

customElements.define("custom-element", CustomElement);
