/*
Crea un componente que se le pase como prop un valor en grados centigrados
Y muestre por pantalla ese valor en grados Farenheit
*/


interface Props{
  grados: number
}

function Conversor({grados}: Props){
  const farenheit = 1.8 * grados + 32
  return (
    <div>{farenheit} ºF</div>
  )
}


export default function Ejercicio0() {
 return <Conversor grados={30} />
}
