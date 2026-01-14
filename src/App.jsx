import { Suspense, useState } from "react";
import "./App.css";
import AvailableBalance from "./Component/AvailableBalance/AvailableBalance";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import SelectedPlayers from "./Component/SelectedPlayers/SelectedPlayers";
import Footer from "./Component/Footer/Footer";
import Subscribe from "./Component/Subscribe/Subscribe";

let fetchPlayers = fetch("/player.json").then((res) => res.json());

function App() {
  let [toggle, setToggle] = useState(true);
  let [availableBalance, setAvailableBalance] = useState(600000);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Hero></Hero>

      <div className="container mx-auto flex justify-between items-center mt-10">
        <h3 className="text-2xl font-bold">
          {toggle === true ? "Available Players" : "Selected Players"}
        </h3>
        <div className="">
          <button
            onClick={() => setToggle(true)}
            className={`px-5 py-3 cursor-pointer border-2 border-gray-200 text-gray-500 border-r-0 rounded-l-xl ${
              toggle === true ? "font-extrabold" : ""
            } ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`px-5 py-3 cursor-pointer border-2 border-gray-200 text-gray-500 border-l-0 rounded-r-xl ${
              toggle === false ? "font-extrabold" : ""
            } ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense fallback={<h3>Just a sec...</h3>}>
          <AvailableBalance
            fetchPlayers={fetchPlayers}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
          ></AvailableBalance>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}

      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default App;
