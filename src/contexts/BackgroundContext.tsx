import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
interface BackgroundContextType{
    background: string
    setBackground: Dispatch<SetStateAction<string>>
}
const BackgroundContext = createContext<BackgroundContextType>({
    background: 'light',
    setBackground: () => {}
})

interface BackgroundProviderWrapperProps {
    children: ReactNode
}
function BackgroundProviderWrapper({children}:BackgroundProviderWrapperProps){
    const [background, setBackground] = useState('light')

    return (
        <BackgroundContext.Provider value={{background, setBackground}}>
            {children}
        </BackgroundContext.Provider>
    )
}

export {BackgroundContext, BackgroundProviderWrapper}