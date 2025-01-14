// Para el manejo del contexto
// hay librerías muy potente como Zuntand o Redexu
// En este ejemplo vamos a usar algo mas sencillo como: useContext

import { useContext, useState } from "react"
import { BackgroundContext } from "../contexts/backgroundContext"

function A() {
    const {background, setBackground} = useContext(BackgroundContext)
    return (
        <>
            <div>A {background} </div>
            <button onClick={ ()=>setBackground('light') }>Light</button>
        </>

    )
}
function B() {
    const {background, setBackground} = useContext(BackgroundContext)
    return (
        <>
            <div>B {background} </div>
            <button onClick={ ()=>setBackground('dark') }>Dark</button>
        </>
    )
}

function Ejem27() {
    const [background, setBackground] = useState('light')
    return (
        <BackgroundContext.Provider value={{background, setBackground}}>
            <A />
            <B />
        </BackgroundContext.Provider>
    )
}

export default Ejem27