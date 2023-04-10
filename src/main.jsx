import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PokemonContextProvider from './context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PokemonContextProvider>
    <App />
  </PokemonContextProvider>,
)
