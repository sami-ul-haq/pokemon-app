import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
       <Link to="/"> PokemonApp</Link>
       <Link to="/search-pokemon"> <button> Search Pokemon</button></Link>
    </div>
  )
}

export default Header