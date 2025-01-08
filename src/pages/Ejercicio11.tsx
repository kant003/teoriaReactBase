/*
Simplifica el ejercicio 8 usando hooks y genericos
*/






import { useState, ChangeEvent, FormEvent } from "react"
import CircularSpinner from "../components/CircularSpinner"

interface FormValues{
    [key: string]: string
}
// hook
function useForm<T extends FormValues>(initialForm:T){
    const [formData, setFormData] = useState(initialForm)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value, })
    }

    const reset = () => {
        setFormData(initialForm)
    }

    return { formData, setError,  error,  loading, setLoading, handleChange, reset}
}


export default function Ejercicio11() {
   const {formData, error, loading, setError, setLoading, handleChange } = useForm({
    title: '',
    body: ''
   })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log(formData)
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({ ...formData, userId: 100,  }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
 
            if(!response.ok) throw new Error()
            const data = await response.json()
            console.log('Formulario enviado sin errores:',data)
            setError('')
        } catch (e) {
            console.error('formulario con errores')
            setError( e instanceof Error ? e.message : 'Error al enviar' )
        } finally{
            setLoading(false)
        }
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Title:</label>
            <input name="title" id="title" value={formData.title} onChange={handleChange} placeholder="Escribe aquí el título" />

            <label htmlFor="">Body:</label>
            <input name="body" id="body" value={formData.body} onChange={handleChange} placeholder="Escribe aquí el body" />

            <button className="flex gap-3 items-center" type="submit" disabled={loading}>
                Enviar
                {loading && <CircularSpinner />}
            </button>
           
            {error && <div className="text-red-600">{error}</div>}
        </form>
    )
}






/* 


interface Espada{
    material: 'madera' | 'metal' | 'diamante'
    danno: number
}
interface Mazo{
    danno: number
}

interface Gema{
    valor: number
    color: string
}

class Caja<T>{
    contenido: T[] = []
    meter(algo:T){
        this.contenido.push(algo)
    }
    sacar(){
        this.contenido.pop()
    }
}


const miCajitaDelTesoro = new Caja<Gema>()
const miCajitaDelArmas =  new Caja<Espada | Mazo>()


const tizona: Espada = {
    danno: 200000,
    material: 'metal'
}
const panteraRosa: Gema = {
    color: 'rosa',
    valor: 70000000
}

miCajitaDelArmas.meter(   tizona  )
miCajitaDelTesoro.meter ( panteraRosa )
 */
/* 
class CajaDeEspadas{
    contenido: Espada[] = []
   
    meter(espada: Espada){ this.contenido.push(espada)    }
    sacarUltima(){ this.contenido.pop()     }   
}

class CajaDeGemas{
    contenido: Gema[] = []
   
    meter(gema: Gema){ this.contenido.push(gema)    }
    sacarUltima(){ this.contenido.pop()     }   
}
 */