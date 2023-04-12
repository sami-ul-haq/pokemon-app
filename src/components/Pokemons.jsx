import { useGlobalContext } from "../context/GlobalContext";
import Pokemon from "./Pokemon";

const Pokemons = () => {

  const { data, isLoading } = useGlobalContext();
  
  if(isLoading){
    return <h1>Loading Pokemons ...</h1>
  }

  return (
    <div className="pokemon-container">
      
      { data ?
        data.map((pokItem,i) => <Pokemon key={i} pokItem={pokItem} />)
       : <p>No pOkemon Found</p>
      }
      
      </div>
  )
}

export default Pokemons;