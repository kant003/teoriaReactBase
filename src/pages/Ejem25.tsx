import { useParams } from 'react-router-dom'

function Ejem25() {
    const {id} = useParams() 
    // en un useEffect, acceder a la bd y obtener el usuario completo partiendo de su id
  return (
    <div>Perfil del usuario {id}</div>
  )
}

export default Ejem25