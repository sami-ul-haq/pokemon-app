import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PokemonDetails from "./components/PokemonDetails";
import Pokemons from "./components/Pokemons";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Pokemons />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
