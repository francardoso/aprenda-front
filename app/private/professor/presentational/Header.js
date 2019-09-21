import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SandwichMenu from '../../commons/presentational/SandwichMenu';

const HeaderStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #158CBA;
    height: 60px;
`

const Header = ({
    logout
}) =>{
    return(
        <HeaderStyled>
            <Link to={'/professor/lessons'} style={{color:'#FFFFFF'}}>Atividades</Link>
            <SandwichMenu>
                <li onClick={()=>logout()}>SAIR</li>
            </SandwichMenu>
        </HeaderStyled>
    )
}

export default Header;