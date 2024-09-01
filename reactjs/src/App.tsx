import "./App.css";
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { LitNetwork } from "@lit-protocol/constants";
import { useState } from "react";

function App() {
    const [status, setStatus] = useState("");

    async function instantiateLit() {
        setStatus("Connecting to Lit...");
        console.log("Connecting to Lit...");
        const litNodeClient = new LitNodeClient({
            litNetwork: LitNetwork.DatilDev,
        });

        await litNodeClient.connect();
        console.log("Connected!");
        setStatus("Connected!");
    }

    return (
        <div className="App">
            <h1>Lit with React</h1>
            <p>{status}</p>
            <button onClick={instantiateLit}>Instantiate Lit</button>
        </div>
    );
}

export default App;
