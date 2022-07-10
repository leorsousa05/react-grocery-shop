import React, { useContext, useCallback } from 'react';
import { createContext } from 'react';
import { lanches } from '../data';

const FoodsContext = createContext()

export const Foods = ({ children }) => {
    
    const [foods, setFoods] = useCallback(() => {
        setFoods([...lanches])
    }, [])

    return (
        <FoodsContext.Provider value={{ foods, setFoods}} >
            {children}
        </FoodsContext.Provider>
    );
}

export function useFoods() {
    const context = useContext(FoodsContext)
    return context
}
