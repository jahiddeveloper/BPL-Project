import { Suspense } from "react";
import "./App.css";
import AvailableBalance from "./Component/AvailableBalance/AvailableBalance";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";

let fetchPlayers = fetch('/player.json')
.then(res => res.json())

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h3>Just a sec...</h3>}>
        <AvailableBalance fetchPlayers = {fetchPlayers}></AvailableBalance>
      </Suspense>
    </>
  );
}

export default App;
