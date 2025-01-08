const Admin = () => <p>Soy el administrador</p>
const Invitado = () => <p>Soy el invitado</p>

function ComponenteCondicional(){
  const isAdmin = true

  /* function calculo(){
    if(isAdmin){
      return <Admin/>
    }else{
      return <Invitado/>
    }
  } */
  
  return isAdmin ? <Admin/> : <Invitado/>
}


export default function Ejem4(){
  return <ComponenteCondicional/>
}