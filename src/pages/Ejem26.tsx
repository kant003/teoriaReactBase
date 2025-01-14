import { useLocation } from "react-router-dom"

let users = ['Pepe', 'Bea', 'Antonio', 'Mamen']
// http://localhost?p=m
function Ejem26() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const name = queryParams.get('name')

    if(name) users = users.filter(user => user.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()))
  return (
    <>
    <h1>Listando todos los usuarios, filtrando por nombre: {name}</h1>
    <div>
        {users.map( (user, index) => <div key={index}>{user}</div>)}
    </div>
    </>
  )
}

export default Ejem26