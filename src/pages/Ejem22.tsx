import { FormEvent, useState } from 'react'

export default function Ejem22() {
  const [name, setName] = useState('Hola')

  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault()
    console.log('se envio el formulario:', name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre: <input value={name} onChange={(e)=>setName(e.target.value)}/>
      </label>
      <button type="submit">Enviar</button>
      <hr/>
      La caja de texto tiene el valor: {name}
    </form>
  )
}
