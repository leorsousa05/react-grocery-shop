import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const FoodsInCart = createContext()

export function useFoodToCart({ children }) {
    const [foodsInCart, setFoodsInCart] = useState()

    return (
        <FoodsInCart.Provider value={{foodsInCart, setFoodsInCart}} >
            {children}
        </FoodsInCart.Provider>
    )
}
