import { html, LitElement } from 'lit';
import { style } from './CardList.styles.js';

export class CardList extends LitElement {
  static get styles() {
    return style;
  }

  static get properties() {
    return {
      items: { type: Array },
      heading: { type: String },
    };
  }

  constructor() {
    super();
    this.items = [];
  }

  render() {
    return html`
      <h2 class="heading">${this.heading}</h2>
      <ul>
        ${this.items.map(
          (item) => html`
            <li>
              <img width="64" src=${item.picture} alt="" />
              <div class="left">
                <div>${item.name}</div>
                <div class="small faded">${item.city}</div>
              </div>

              <div class="right">
                <div class="${item.balance < 0 ? 'negative' : ''}">
                  ${item.balance}
                </div>
                <div class="small faded">${item.date}</div>
              </div>
            </li>
          `
        )}
      </ul>
    `;
  }
}

customElements.define('card-list', CardList);
