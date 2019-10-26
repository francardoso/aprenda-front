import React from 'react';

import Ul from './styles';

const SubMenu = ({
    options = [],
    handleMenuSelect,
    optionSelected
}) => {
    return(
        <Ul className='breadcrumb'>
        {
            options.map(item => {
                return(
                    <li 
                        key={item.accessor}
                        onClick={() => handleMenuSelect(item.accessor)}
                        className={`breadcrumb-item${optionSelected === item.accessor ? ' active' : ''}`}
                    >
                        {item.name}
                    </li>
                )
            })
        }
        </Ul>
    )   
};

export default SubMenu;