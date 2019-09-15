import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    justify-content: center;
`;

const SubMenu = ({options, handleMenuSelect, optionSelected}) => {
    return(
        <Ul>
        {
            options.map(item => {
                return(
                    <li key={item} onClick={() => handleMenuSelect(item)}>{item}</li>
                )
                
                
            })
        }
        </Ul>
    )   
};

export default SubMenu;