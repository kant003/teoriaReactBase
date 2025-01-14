/* 
# Filtrado de coches
- Se desea mostrar por pantalla un listado de coches. 
    (marca, modelo y tipo carrocería: verlina, suv, cupe, deportivo, ... )
- Mediante un formulario podremos filtrar:
    * por marca (caja de texto) 
    * y por tipo de carrocería (select)
Se usará query params para mejorar la experiencia del usuario
    ej: http://localhost?marca=seat&carroceria=suv
*/

import { FormEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
interface Car{
    brand: string
    model: string
    type: string
}
const initialCars = [
    {brand:'Seat', model:'Leon', type: 'sedan'},
    {brand:'Ford', model:'Focus', type: 'sedan'},
    {brand:'BMW', model:'Serie 3', type: 'berlina'},
    {brand:'BMW', model:'Serie 6', type: 'berlina'},
    {brand:'Audi', model:'TT', type: 'coupe'},
    {brand:'BMW', model:'Serie 5', type: 'coupe'}
]

function Ejercicio14() {

    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    // http://localhost:5173/Ejercicio14?brand=BMW&type=berlina
    const brandParam = queryParams.get('brand') || ''
    const typeParam = queryParams.get('type') || ''


    const [cars, setCars] = useState<Car[]>(initialCars)
    const [brand, setBrand] = useState(brandParam)
    const [type, setType] = useState(typeParam)

   

    useEffect( () => {
        console.log('se ejecuta y brand cale:',brand)
        const filtredCars = initialCars.filter(
            car => 
                (brandParam ? car.brand.toLowerCase().includes(brandParam?.toLowerCase()) : true) &&
                (typeParam ? car.type === typeParam : true)
            
        )
        setCars(filtredCars)
    },[brandParam, typeParam])

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    navigate(`?brand=${brand}&type=${type}`)
  }

  return (
    <main>
        <h1>Listado de coches</h1>
        <form onSubmit={handleSubmit}>
            <label>Marca:</label>
            <input value={brand} onChange={(e)=>setBrand(e.target.value)}/>

            <label>Carrocería</label>
            <select value={type} onChange={(e)=>setType(e.target.value)}>
                <option value="">Todas</option>
                <option value="sedan">Sedán</option>
                <option value="berlina">Berlina</option>
                <option value="coupe">Coupe</option>
                <option value="familiar">Familiar</option>
                <option value="suv">Suv</option>
            </select>
            <button>Filtrar</button>
        </form>
        {cars.length === 0 && <div>No hay resultados de búsqueda</div>}
        <ul>
            {cars.map( (car, index) => 
                <li key={index}>{car.brand} {car.model} {car.type} </li>
            )}
        </ul>
    </main>
  )
}

export default Ejercicio14