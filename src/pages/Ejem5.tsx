const Saludador = () => <p>Hola</p>
interface Props{
    nombre: string
    valor: number
    activo: boolean
    hobies: string[]
    dato: JSX.Element
    MiComponente: React.ReactNode
    miFuncion: (valor:number) => number
}

function ComponenteConProps({nombre, valor, activo, hobies, dato, MiComponente, miFuncion}: Props) {
  return (
    <>
        <div>Hola {nombre}</div>
        <div>El valor es: {valor}</div>
        <div>Esta activo? {activo?'SI':'NO'}</div>
        <div>Sus jobies: {hobies.join(',')}</div>
        <div>{dato}</div>
        <div>{MiComponente}</div>
        <div>{miFuncion(6)}</div>

    </>
  )
}
export default function Ejem5() {
  return (
    <ComponenteConProps
        nombre='Ana'         valor={6}         activo={true}         hobies={['cantar', 'bailar']}
        dato={<p>hola</p>}   MiComponente = {<Saludador/>}  miFuncion={(v) => v+1}
    />
  )
}
