import React from "react";
import styled from "styled-components"

export const Main = styled.main`
    height: calc(100vh - 30.2vh);
    padding: 4rem;
    background-color: #212529;
    border-radius: 80px 80px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    flex-direction: row;
`;

export const StyledFoodCard = styled.div`
    font-size: 1.3rem;
    width: 24rem;

    & .nameAndPrice {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 1.2rem;
        padding-bottom: .2rem;
        border-bottom: 1px dotted white;
    }

    & .description p {
        opacity: 80%;
        padding: .4rem 0;
        font-size: 1rem;
    }

    & img {
        width: 24rem;
        height: 18rem;
    }
`;

export function FoodCard({ name, price, image, description }) {
    return(
        <StyledFoodCard>
            <img src={image} alt="" />
            <div className="nameAndPrice">
                <p>{name}</p>
                <p>{price}</p>
            </div>
            <div className="description">
                <p>
                    {description}
                </p>
            </div>
        </StyledFoodCard>
    )
}