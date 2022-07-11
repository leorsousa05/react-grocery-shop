import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { allFoods } from '../data';


const FoodsContext = createContext() // Create a context

export const FoodsContextProvider = ({ children }) => {
    
    const [foods, setFoods] = useState(allFoods) // Get all the foods data
    const [foodsCategory, setFoodsCategory] = useState("all") // Set the category of the food data
    const [categorizedFoods, setCategorizedFoods] = useState( // Categorize the food data
        foodsCategory !== "all" ? foods.filter(food => ( food.type === foodsCategory)) : foods
    )
    console.log(foodsCategory)

    useEffect(() => {
        setCategorizedFoods(
            foodsCategory !== "all" ? foods.filter(food => ( food.type === foodsCategory)) : foods
            )
    }, [foodsCategory, foods])

    return ( // Return the context provider
        <FoodsContext.Provider value={{ foods, setFoods, foodsCategory, setFoodsCategory, categorizedFoods, setCategorizedFoods }} >
            {children}
        </FoodsContext.Provider>
    );
}

export function useFoods() { // Create the hooks for the food provider
    const context = useContext(FoodsContext)
    return context
}
