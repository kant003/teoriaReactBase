import React, { useEffect, useState } from 'react'
interface Pokemon{
  name: string
}
export default function Ejem18() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function llamada(){
    try{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      setPokemons(data.results)
    }catch(e){
      console.error(e)
      setError(true)
    }finally{
      setLoading(false)
    }
  }

  useEffect( ()=>{
    llamada()
  }, [])

  if(loading) return <div>Cargando lista de pokemons...</div>
  if(error) return <div>Fallo al obtener los pokemons</div>
 
  return (
    <div>
      {pokemons.map(pokemon => <div key={pokemon.name}>{pokemon.name}</div>)}
    </div>
  )
}
