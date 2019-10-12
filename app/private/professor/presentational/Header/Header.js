import React from 'react';
import { Link } from 'react-router-dom';

import HeaderStyled from './styles'; 
import SandwichMenu from '../../../commons/presentational/SandwichMenu';

const Header = ({
    logout
}) =>{
    return(
        <HeaderStyled>
            <Link to={'/professor/lessons'} style={{color:'#FFFFFF'}}>Atividades</Link>
            <Link to={'/professor/reports'} style={{color:'#FFFFFF'}}>Relatórios</Link>
            <SandwichMenu>
                <li onClick={()=>logout()}>SAIR</li>
            </SandwichMenu>
        </HeaderStyled>
    )
}

export default Header;