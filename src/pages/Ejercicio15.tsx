import { ChangeEvent, FormEvent, useState } from "react"

/* 
Mejora el ejercicio 12.
Creando 2 componente nuevos
- Uno para el listado de usuarios
- Otro para el formulario de añadir nuevos usuarios
*/
interface ListNamesProps{
  names: string[]
  onClick: (index:number)=> void
}
function ListNames({names, onClick}:ListNamesProps) {
  return <>
    {names.map( (name,index) => <div key={index}>
            {name}
            <button onClick={()=>onClick(index)}>X</button>
            </div>)
    }
    </>
}

interface FormNamesProps{
  onSubmit: (e:FormEvent, newName:string)=>void
}
function FormNames({onSubmit}: FormNamesProps) {
  const [newName, setNewName ] = useState('')

  const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    setNewName('')
    onSubmit(e, newName)
  }

  return (
    <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input value={newName} onChange={handleOnChange}/>
            <button>Añadir</button>
      </form>
  )
}


const initialNames = ['Paula', 'Ana', 'Belén', 'María']
function Ejercicio15() {
  const [names, setNames] = useState(initialNames) 
    
  const handleSubmit = (e:FormEvent, newName: string) => {
    if(!newName) return  // <-- validación
    if(newName.length < 3) return // validación

    setNames([...names, newName]) // <- insert en una BD
    // llamar a un api
    // guardar el BD
  } 

  
  const handleDelete = (indexToDelete:number) => {
    const newList = names.filter((_,index) => index !== indexToDelete)
    setNames(newList)
  }
  return (
    <div>
        <FormNames onSubmit={handleSubmit}/>
        <ListNames names={names} onClick={(index) => handleDelete(index)}/>
    </div>
  )
}

export default Ejercicio15
