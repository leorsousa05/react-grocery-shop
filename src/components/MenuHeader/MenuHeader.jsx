import { Button } from './Style'
import React from 'react'
import { Header } from './Style'

export default function MenuHeader() {
    return (
        <Header>
            <h1>Nosso Menu</h1>
            <nav>
                <ul>
                    <Button>Todos</Button>
                    <Button>Lanches</Button>
                    <Button>Sobremesas</Button>
                </ul>
            </nav>
        </Header>
    )
}
