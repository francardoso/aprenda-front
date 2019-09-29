import React from 'react';

//styles
import { CardStyled } from './styles';

const cardImage = '/assets/card-image.jpg';
const Card = ({
    fontColor = 'white',
    title,
    onClick
})=>{
    return (
        <CardStyled fontColor={fontColor} onClick={onClick}>
            <div className="card_image"> <img src={cardImage} /> </div>
            <div className="card_title">
                <p>{title}</p>
            </div>
        </CardStyled>
    )
};

export default Card;