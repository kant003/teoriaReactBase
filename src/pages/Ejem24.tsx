import { useState } from 'react'

//  Hook personalizado
function useCounter(inital=0) {
  const [cont, setCont] = useState(inital)

  const incrementar = () => setCont(cont + 1)
  const duplicador = () => setCont(cont * 2)
  const decrementar = () => setCont(cont - 1)
  const resetear = () =>    setCont(inital)
  
  return { cont,  incrementar,  decrementar, resetear, duplicador }
}


export default function Ejem24() {
 const {cont, incrementar, decrementar, resetear:reset }  =  useCounter(3)

  return (
    <div className='flex flex-col'>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
      {cont}
    </div>
  )
}
