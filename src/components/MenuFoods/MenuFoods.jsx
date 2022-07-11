import React from 'react'
import { useFoods } from '../../hooks/useFoods'
import { FoodCard, Main } from './Style'

export default function MenuFoods() {
  const { categorizedFoods } = useFoods()
  return (
    <Main>
        {categorizedFoods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            description={food.description}
            id={food.id}
          />
        ))}
    </Main>
  )
}
