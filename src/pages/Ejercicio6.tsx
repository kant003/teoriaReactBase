/*
Mostrar una lista de cosas en pantalla.
El usuario podrá seleccionar (pulsando sobre alguna de ellas) y la cosa se resaltará
Aparecerá un mensaje por consola indicando que se ha seleccionado el elemento X (ej: 'se ha selec:1')
Por defecto, aparecerá marcado un elemento (el que se le pase por props)
*/

import { useState } from "react"
interface Props{
    initialSelected?: number
}
function Galery({initialSelected=0}: Props) {
    const items = ['Elem1', 'Elem2', 'Elem3']
    const [selected, setSelected] = useState(initialSelected)
    const handleSelect = (index:number) => {
        setSelected(index)
        console.log('El elemento seleccioando es', index)
    }
    return <ul>
        {items.map((item, index) => {
            return <li 
                    key={item} 
                    onClick={() => handleSelect(index)}
                    className={selected === index ? 'border border-blue-500' : ''}>{item}</li>
        }
        )}
    </ul>
}

export default function Ejercicio6() {
    return (
        <Galery />
    )
}
