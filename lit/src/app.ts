import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import { LitNetwork } from '@lit-protocol/constants';

@customElement('app')
export class App extends LitElement {
  static styles = css`
    .app {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 2rem;
    }
  `;

  @state()
  status = ''; // Declare state

  async instantiateLit() {
    this.status = 'Connecting to Lit...';
    console.log('connecting to lit...');
    const litNodeClient = new LitNodeClient({
      litNetwork: LitNetwork.DatilDev,
      debug: false,
    });

    await litNodeClient.connect();
    console.log('connected!');
    this.status = 'Connected!';
  }

  render() {
    return html`
      <div class="app">
        <h1>Using with Lit framework</h1>
        <p>${this.status}</p>
        <button @click="${this.instantiateLit}">Instantiate Lit</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app': App;
  }
}

export default App;