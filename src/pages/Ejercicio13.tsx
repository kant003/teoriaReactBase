
/*
# Maquina de café
Haz una replica de la maquina de café de Cebem.
- Tendremos botones para añadir dinero: 0.10, 0.20, 0.50, 1.00 y 2.00 €
- Un boton para devolver todo el dinero insertado
- Tendremos botones para aumentar o disminuir el nivel de azucar (de 0 a 5)
- Tendremos botones para indicar el tipo de cafe: corto, largo, descafeinado,...
* El precio de los cafés es de 0.70 €
- Mostrar error si no se ha insertado el suficiente dinero.
- Si todo va bien, se mostrará por pantalla el tipo de café consumido, 
  su nivel de azucar y el cambio a devolver
*/

import React, { useState } from 'react'
interface Coffe{
  name: string
  price: number
}
const coffes = [
  {name:'cortado', price:0.70},
  {name:'descafeinado', price:0.70},
  {name:'solo', price:0.80},
  {name:'con leche', price:0.70},
  {name:'te', price:0.70},
]

const coins = [0.10, 0.20, 0.50, 1.00, 2.00]

function Ejercicio13() {
  const [sugar, setSugar] = useState(1)
  const [money, setMoney] = useState(0)
  const [msg, setMsg] = useState('')

  const handleChangeSugar = (increment: number) => {
    if (sugar + increment < 0 || sugar + increment > 5) return
    setSugar(sugar + increment)
  }
  const handleGetCoffe = (coffe:Coffe) => {
    let endMsg
    if(money >= coffe.price) {
      endMsg = `Te he servido un café ${coffe.name} con ${sugar} de azucar y el cambio es: ${money - coffe.price}` 
      setMoney(money - coffe.price)
    }else{
      endMsg = `No tienes suficiente dinero, el café cuesta ${coffe.price}`
    }
    setMsg(endMsg)
  }
  return (
    <main>
      <h1>MÁQUINA DE CAFÉ</h1>
      <section className='flex gap-5'>
        <section className='border rounded p-4'>
          <header>
            Azucar
            <button onClick={() => handleChangeSugar(-1)}>-</button>
            {sugar}
            <button onClick={() => handleChangeSugar(+1)}>+</button>
          </header>
          <div className='flex flex-col'>
            {coffes.map(coffe => <button key={coffe.name} onClick={()=>handleGetCoffe(coffe)}>{coffe.name} {coffe.price}</button>)}
          </div>

        </section>
        <section  className='border rounded p-4'>
            <header> {money.toFixed(2)} </header>
            <div>
              {coins.map(coin =>  <button key={coin} onClick={()=>setMoney(money + coin)}> {coin.toFixed(2)} </button>)}
              <button onClick={()=>setMoney(0)}>Devolver</button>
            </div>
        </section>
      </section>
      <footer>{msg}</footer>
    </main>
  )
}

export default Ejercicio13