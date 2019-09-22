import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import SandwichMenu from '../../commons/presentational/SandwichMenu';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #158CBA;
    height: 60px;
`;

const Header = ({
    logout
}) =>{
    return (
        <Nav>
           <Link to={'/lessons'} style={{color:'#FFFFFF'}}>Atividades</Link>
           <SandwichMenu>
                <li onClick={()=>logout()}>SAIR</li>
            </SandwichMenu>
        </Nav>
    )
};

export default Header;