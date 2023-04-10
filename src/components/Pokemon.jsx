const Pokemon = ({ pokItem }) => {
  const { name } = pokItem;
  return (
    <div className="pokemon">
      {/* <img src={sprites.front_default} alt="pokemon" /> */}
      <h1>{name}</h1>
    </div>
  );
};

export default Pokemon;
