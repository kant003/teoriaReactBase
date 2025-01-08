/*
Estamos usando mucho la clase botón, crea un componente Boton, que nos 
permita reutilizalo en toda nuestra aplicación.
*/

import Button from "../components/Button"

export default function Ejercicio5() {
    const handleClick = () => {
        alert('hola')
    }
    return (
        <Button onClick={handleClick}>  Pulsame  </Button>
    )
}
