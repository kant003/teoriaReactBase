// Alta cohexión bajo acoplamiento
interface Props{
  mensaje: string
  formateador: (x:string) => string
}
function Componente({mensaje, formateador}: Props){
  return formateador(mensaje)
}

export default function Ejem7() {
  const pasarAMayusculas = (valor: string) => valor.toUpperCase()
  //const pasarAMinusculas = (valor: string) => valor.toLowerCase()
  //const obtenerPrimeraLetra = (valor: string) => valor[0]

  return (
    <Componente mensaje='hola' formateador={pasarAMayusculas}/>
  )
}
