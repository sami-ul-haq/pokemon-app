import { Link } from "react-router-dom";

const Pokemon = ({ pokItem }) => {
  const { name } = pokItem;

  return (
    <div className="pokemon">
      <h1>{name}</h1>
      <Link to={`/pokemon/${name}`}>
        <button>Know More</button>
      </Link>
    </div>
  );
};

export default Pokemon;
