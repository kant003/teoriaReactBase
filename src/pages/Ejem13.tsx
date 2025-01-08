
import React, { useState } from 'react'


function Contador(){
  const [cont, setCont] = useState(0)
  const handleIncrement = () => setCont(cont + 1)
  console.log('Se ejecuta el componente hijo')
  return (
    <button onClick={handleIncrement}>{cont}</button>
  )
}


export default function Ejem13() {
  const [cont, setCont] = useState(0)
  const handleIncrement = () => setCont(cont + 1)
  console.log('Se ejecuta el componente padre')
  return (
    <>
    <button onClick={handleIncrement}>{cont}</button>
    <Contador />
    </>
  )
}
