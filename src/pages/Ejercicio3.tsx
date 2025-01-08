/*
Crea un componente que muestre un texto y un botón.
Cuando se pulse el botón, el texto desaparecerá.
Si se vuelve a pulsar el botón el texto aparecerá. 
Y así continuamente, a modo de toggle.

*/

import { useState } from 'react'

export default function Ejercicio3() {
  const [isVisible, setIsVisible] = useState(true)
  const handleToggle = () => setIsVisible( !isVisible )
  
  return (
    <>
      { isVisible  &&  <p>Buenos días</p> }
      <button onClick={handleToggle}> Toggle </button>
    </>
  )
}
