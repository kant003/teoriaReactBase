import React, { useEffect, useState } from 'react'
interface Pokemon{
  name: string
  url: string
  weight: number
  picture: string
}
export default function Ejem19() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function llamada(){
    try{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const data = await response.json()

      /*const p = []
      for(const pokemon of data.results){
        const response2 = await fetch(pokemon.url)
        const data2 = await response2.json()
        p.push(
          {
            name: data2.name,
            weight: data2.weight,
            picture: data2.sprites.front_default
          }
        )
      }
      setPokemons(p)*/
      const pokemonsDetail = await Promise.all( 
        data.results.map(  async (pokemon:Pokemon) => {
          const response2 = await fetch(pokemon.url)
          const data2 = await response2.json()
          return  {
            name: data2.name,
            weight: data2.weight,
            picture: data2.sprites.front_default
          }
        }) 
    )
    setPokemons(pokemonsDetail)


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
      {pokemons.map(pokemon => 
        <div key={pokemon.name}>
          {pokemon.name}
          <img src={pokemon.picture} />
        </div>
      )}
      
    </div>
  )
}
