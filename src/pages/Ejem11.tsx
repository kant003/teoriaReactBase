import { useState } from "react"

export default function Ejem11() {
  //let contador = 0
  const [ contador , setContador ] = useState(0)


  const titulo = "El estado de react"
  const [ pulsado , setPulsado ] = useState(false)
  //let isPressed = false
  function handleClick(){
    //console.log('has llamado')
    //isPressed = !isPressed
    setPulsado(  !pulsado )

    // incrementar el contador
    setContador(contador+1)
  }

  return (
    <>
    <h1>{titulo}</h1>
    <button onClick={handleClick}>
      {pulsado? 'Esta pulsado': 'No esta pulsado'}
    </button>

    {contador}
    </>
  )
}
