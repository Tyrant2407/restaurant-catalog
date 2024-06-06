class FooterBar extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = null;
    this._style = null;

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
        :host {
          display: block;
        }
   
        div {
          padding: 24px 20px;
          background-color: #FC4100;
          color: white;
          font-size: 15px;
          text-align: center;
        }
      `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `      
        <div>
        Copyright © 2024 - Rizky Putra Perdana
        </div>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
