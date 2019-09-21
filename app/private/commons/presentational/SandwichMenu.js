import React, {useState} from 'react';
import styled from 'styled-components';


const Container = styled.div`
    position: absolute;
    right: 15px;
    top: 0;
    padding: 15px 20px;
`;
const MenuIcon = styled.div`
    cursor: pointer;
    div{
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }
`;
const UlStyled = styled.ul`
    background-color: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding: 20px 15px;
    > * {
        cursor: pointer;
    }
`;


const SandwichMenu = ({children}) =>{
    const [showing, toggleShowing] = useState(false);
    return (
        <Container>
            <MenuIcon onClick={() => toggleShowing(!showing)}>
                <div></div>
                <div></div>
                <div></div>
            </MenuIcon>
            {
                showing &&
                <UlStyled>
                    {children}
                </UlStyled>
            }
        </Container>
    )
};

export default SandwichMenu;