import React, { useContext, useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const FoodsToCart = createContext()

export function FoodsToCartProvider({ children }) {
    const [foodsInCart, setFoodsInCart] = useState([]) // Foods on the cart
    const [isActive, setIsActive] = useState(false) // Check if it is active the cart menu

    const removeItemForCart = (taskid) => {
        setFoodsInCart(foodsInCart.filter((item) => item.id !== taskid ))
    }

    useEffect(() => {
        console.log(foodsInCart)
    })

    return (
        <FoodsToCart.Provider value={{foodsInCart, setFoodsInCart, isActive, setIsActive, removeItemForCart }} >
            {children}
        </FoodsToCart.Provider>
    )
}

export const useFoodToCart = () => {
    const context = useContext(FoodsToCart)
    return context
}
