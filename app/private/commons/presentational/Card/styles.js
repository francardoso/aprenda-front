import styled from 'styled-components';

export const CardStyled = styled.div`
    margin: 30px auto;
    width: 200px;
    height: 200px;
    border-radius: 40px;
    box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
    cursor: pointer;
    transition: 0.4s;
    .card_image{
        width: inherit;
        height: inherit;
        border-radius: 40px;
        img{
            z-index: 2;
            width: inherit;
            height: inherit;
            border-radius: 40px;
            object-fit: cover;
        }
    }
    .card_title{
        text-align: center;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 25px;
        margin-top: -100px;
        color: ${props=> props.fontColor}
    }
    &:hover{
        transform: scale(0.9, 0.9);
        box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
            -5px -5px 30px 15px rgba(0,0,0,0.22);
    }
`; 