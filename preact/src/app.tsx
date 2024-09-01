import './app.css';
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { LitNetwork } from "@lit-protocol/constants";
import { useState } from 'preact/hooks';

export default function App() {
  const [status, setStatus] = useState("");

  async function instantiateLit() {
    setStatus("Connecting to Lit...");
    console.log("connection lit..")
    const litNodeClient = new LitNodeClient({
      litNetwork: LitNetwork.DatilDev,
      debug: false
    });

    await litNodeClient.connect();
    console.log("connected!")
    setStatus("Connected!");
  }

  return (
    <div className="App">
      <h1>Lit with Preact</h1>
      <p>{status}</p>
      <button onClick={instantiateLit}>Instantiate Lit</button>
    </div>
  );
}