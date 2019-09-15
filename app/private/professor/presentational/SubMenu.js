import React from 'react';


const SubMenu = ({options, handleMenuSelect, optionSelected}) => {
    return(
        <ul className="submenu">
        {
            options.map(item => {
                return(
                    <li key={item} className={(optionSelected == item) ? 'selected': ''}  onClick={() => handleMenuSelect(item)}>{item}</li>
                )
                
                
            })
        }
        </ul>
    )   
};

export default SubMenu;