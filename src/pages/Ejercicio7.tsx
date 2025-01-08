/*
Crea un componente de react que muestre el precio actual del bitcoin (en tiempo real)
usa este api gratuita

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur
https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR
*/

import { useEffect, useState } from 'react'
const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur'
export default function Ejercicio7() {
    const [precioBitcoin, setPrecioBitcoin] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const llamarApi = async () => {
        try{
            const response = await fetch(URL)
            if(!response.ok) throw new Error('Error al obtener los datos')
            
            const data = await response.json()
            setPrecioBitcoin(data.bitcoin.eur)
            
        }catch(e){
            console.error(e)
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        llamarApi()
    }, [])
    if(error) return <div>Error: {error}</div>
    if(loading) return <div>Cargando...</div>
    return (
        <div>El bitcoin vale {precioBitcoin} euros </div>
    )
}
