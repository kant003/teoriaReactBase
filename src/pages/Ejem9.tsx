interface Props{
    children: React.ReactNode
}
function Componente({children}: Props){
    return <div>Que tal {children}</div>

}

export default function Ejem9() {
  return (
    <Componente> Antonio </Componente>
  )
}
