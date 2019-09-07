import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #158CBA;
    height: 60px;
`

const Header = () =>{
    return(
        <HeaderStyled>
            <Link to={'#'} style={{color:'#FFFFFF'}}>Atividades</Link>
        </HeaderStyled>
    )
}

export default Header;