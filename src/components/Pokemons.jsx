import { useGlobalContext } from "../context/GlobalContext";
import Pokemon from "./Pokemon";

const Pokemons = () => {

  const { data } = useGlobalContext();
  console.log(data);
  

  return (
    <div>
      
      { data ?
        data?.map((pokItem,i) => <Pokemon key={i} pokItem={pokItem} />)
       : <p>No pOkemon Found</p>
      }
      
      </div>
  )
}

export default Pokemons;