import styled from "styled-components";
import { useFoodToCart } from "../../hooks/useFoodsToCart";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: sans-serif;
    height: 20vh;
    background: #495057;

    & ul {
        list-style: none;
        text-align: center;
        margin: 1rem 0;
        display: flex;

        & li {
            padding: .5rem;
        }
    }

`;


export const Button = styled.button`
    cursor: pointer;
    background-color: #35ce8d;
    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    padding: .5rem;
    margin: 0 .2rem;
`;

export const MarketCart = styled.span`
    z-index: 999;
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: ${props => props.active ? "black" : "white"};
`   

export const LatMenu = styled.div`
    z-index: 998;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    right:0;
    height: 100%;
    width: 30%;
    background-color: #bcbcbc;
    display: ${props => props.active ? "flex" : "none"};
    padding-top: 6rem;
`

export const StyledFoodCard = styled.div`
    display: flex;
    flex-direction: row;
    height: 15rem;
    width: calc(100% - 2rem);
    color: black;
    padding: 1rem;
    

    & img {
        max-width: 200px;
    }

    & .foodcard-container {
        flex-grow: 1;
        padding: 2rem 0;
    }

    & .nameAndPrice {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px dotted black;
        margin-bottom: 1rem;
    }

    & .buttons {
        position: relative;
        bottom: 0;
        left: calc(100% - 10rem);
    }
`

export function FoodCardOnCart({ name, price, image, description, id }) {
    const { removeItemForCart } = useFoodToCart()

    return (
        <StyledFoodCard>
            <img src={image} alt="" />
            <div className="foodcard-container">
                <div className="nameAndPrice">
                    <p>{name}</p>
                    <p>R$ {price.toFixed(2)}</p>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="buttons">
                    <Button onClick={() => removeItemForCart(id)}>Cancelar compra</Button>
                </div>
            </div>
        </StyledFoodCard>
    )
}