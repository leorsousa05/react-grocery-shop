import { Button, MarketCart, LatMenu, FoodCardOnCart } from './Style'
import React from 'react'
import { Header } from './Style'
import { useFoods } from '../../hooks/useFoods'
import { useFoodToCart } from '../../hooks/useFoodsToCart'


export default function MenuHeader() {
    const { setFoodsCategory } = useFoods()
    const { setIsActive, isActive, foodsInCart } = useFoodToCart()

    return (
        <Header>
            <h1>Nosso Menu</h1>
            <nav>
                <ul>
                    <Button onClick={() => setFoodsCategory("all")} >Todos</Button>
                    <Button onClick={() => setFoodsCategory("lanches")} >Lanches</Button>
                    <Button onClick={() => setFoodsCategory("sobremesa")}>Sobremesa</Button>
                </ul>
            </nav>
            <MarketCart active={isActive}>
                <p onClick={() => setIsActive(!isActive)} className={isActive !== false ? "active" : ""}>Carrinho</p>
            </MarketCart>
            <LatMenu active={isActive} >
                {foodsInCart.map(food => (
                    <FoodCardOnCart
                        name={food.name}
                        description={food.description}
                        image={food.image}
                        price={food.price}
                        id={food.id}
                        key={food.id}
                    />
                ))}
            </LatMenu>
        </Header>
    )
}
