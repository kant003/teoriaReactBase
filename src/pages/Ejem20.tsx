import { useEffect, useState } from 'react'

export default function Ejem20() {
  const [tecla, setTecla] = useState("")

  const controlTecla = (e:KeyboardEvent) => {
    console.log('pulsaste tecla:',e.key)
    setTecla(e.key)
  }

  useEffect( ()=> {
    window.addEventListener('keydown', controlTecla)

    // falta desmontar el componente
    return ()=>{
      window.removeEventListener('keydown', controlTecla)
    }
  }, [])

  return (
    <div>La tecla que has pulsado es: {tecla}</div>
  )
}
