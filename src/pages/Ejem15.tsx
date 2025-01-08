
const nombres = ['Juan', 'Antonio', 'Rosa', 'Paula']

export default function Ejem15() {
  return (
    <>
      <ul>
        {nombres.map(nombre => <li key={nombre}>{nombre}</li>)}
      </ul>
      <hr/>
      <ul>
        {nombres.map((nombre,index) => <li key={index}>{nombre}</li>)}
      </ul>

    </>
  )
}
