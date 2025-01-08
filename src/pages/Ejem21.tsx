import React, { useEffect, useState } from 'react'

export default function Ejem21() {
  const [cont, setCont] = useState(0)
  useEffect( ()=>{
    setCont(cont + 1)
    console.log('entra en el useEffect')
  })

  return (
    <div>Peligro!!! esto es un bucle infinito {cont}</div>
  )
}
