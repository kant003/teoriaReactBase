import { ChangeEvent, FormEvent, useState } from 'react'

export default function Ejem23() {
  const [form, setForm] = useState(
    {
      nombre: 'Juan',
      email: ''
    }
  )

  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault()
    console.log('se envio el formulario:', form.nombre)
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = e.target
    setForm({ ...form, [name]:value,  }) 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre: 
        <input name="nombre" value={form.nombre} onChange={handleChange}/>
      </label>

      <label>
        Email: 
        <input name="email" value={form.email} onChange={handleChange}/>
      </label>

      <button type="submit">Enviar</button>
      <hr/>
      La caja de texto tiene el valor: {form.nombre}
    </form>
  )
}
