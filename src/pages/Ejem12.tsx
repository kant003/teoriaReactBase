
import { useState } from 'react'


function Contador(){
  const [cont, setCont] = useState(0)
  const handleIncrement = () => setCont(cont + 1)
  
  console.log('El componente se ejecuta')

  return (
    <button onClick={handleIncrement}>{cont}</button>
  )
}


export default function Ejem12() {
  return (
    <Contador />
  )
}
