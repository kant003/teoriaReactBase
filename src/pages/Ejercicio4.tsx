/*
Crea un componente que simule el lanzamiento de un dado.
Al pulsar un botón, mostrará un numero aleatorio entre 1 y 6.
*/

import { useState } from 'react'

export default function Ejercicio4() {
    const [dado, setDado] = useState<number>()
   /*  const handleLanzarDado = () => {
        setDado( Math.floor( Math.random()*6+1 )  )
    } */
    return (
        <>
            <p>{dado}</p>
            <button onClick={ () => setDado( Math.floor( Math.random()*6+1 )  )    }>Lanza un dado</button>
        </>
    )
}
