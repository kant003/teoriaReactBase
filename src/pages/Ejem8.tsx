// Las props son inmutables. Esto no está del todo correcto
function Saludador({msg}: {msg:string}){
  msg = msg.toLowerCase()
  return <div>{msg}</div>
}

export default function Ejem8() {
  return <Saludador msg="Hola" />
}
