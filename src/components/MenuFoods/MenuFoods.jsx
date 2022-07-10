import React from 'react'
import { useFoods } from '../../hooks/useFoods'
import { FoodCard, Main } from './Style'

export default function MenuFoods() {
  const { foods } = useFoods()
  return (
    <Main>
        {}
        <FoodCard
          name={}
          price={}
          image={}
          description={}
        />
    </Main>
  )
}
