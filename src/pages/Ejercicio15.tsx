import { ChangeEvent, FormEvent, useState } from "react"

/* 
Mejora el ejercicio 12.
Creando 2 componente nuevos
- Uno para el listado de usuarios
- Otro para el formulario de añadir nuevos usuarios
*/
const initialNames = ['Paula', 'Ana', 'Belén', 'María']
function Ejercicio15() {
  const [names, setNames] = useState(initialNames) 
  const [newName, setNewName ] = useState('')
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    // names.push(newName)  <- mal
    if(!newName) return
    setNames([...names, newName])
    setNewName('')
  } 
  const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)
  const handleDelete = (indexToDelete:number) => {
    const newList = names.filter((_,index) => index !== indexToDelete)
    setNames(newList)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input value={newName} onChange={handleOnChange}/>
            <button>Añadir</button>
        </form>
        {names.map( (name,index) => <div key={index}>
            {name}
            <button onClick={()=>handleDelete(index)}>X</button>
            </div>)}
    </div>
  )
}

export default Ejercicio15
