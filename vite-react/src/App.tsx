import './App.css';
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { LitNetwork } from "@lit-protocol/constants";

const App: React.FC = () => {

  async function instantiateLit() {
    console.log("connection lit..")
    const litNodeClient = new LitNodeClient({
      litNetwork: LitNetwork.DatilDev,
      debug: false
    });

    await litNodeClient.connect();
    console.log("connected!")
  }

  return (
    <div className="App">
      <h1>Lit with Vite-React</h1>
      <p>Check console</p>
      <button onClick={instantiateLit}>Instantiate Lit</button>
    </div>
  );
}

export default App;