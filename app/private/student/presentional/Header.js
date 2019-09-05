import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #158CBA;
    height: 60px;
`;

const Header = () =>{
    return (
        <Nav>
           <Link to={'#'} style={{color:'#FFFFFF'}}>Atividades</Link>
        </Nav>
    )
};

export default Header;