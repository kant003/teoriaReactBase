
import { useEffect, useState } from 'react'
import Button from '../components/Button'

export default function Ejem16() {
  const [cont1, setCont1] = useState(1)
  const [cont2, setCont2] = useState(3)
  
  useEffect(
    ()=>{
      console.log('El componente se ha montado')
    },
    []
  )

  useEffect(
    ()=> {
      console.log('Esto se muestra siempre que cambia algun estado')
    }
  )

  useEffect(
    ()=> {
      console.log('Esto se ejecuta solo cuando el estado cont2 cambia')
    }
    ,
    [cont2]
  )

  return (
    <>
    <Button onClick={()=>setCont1(cont1+1)}>Pulsame {cont1}</Button>
    <Button onClick={()=>setCont2(cont2+1)}>Pulsame {cont2}</Button>
    </>
  )
}
