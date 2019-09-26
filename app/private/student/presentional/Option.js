import React from 'react';

import Input from '../../commons/presentational/Input';

const Option = ({
    option,
    type,
    onSelectOption,
    checked,
    disabled,
})=>{
    return(
        <div>
            <p>{option.title}</p>
            <Input 
                type={type === 'single' ? 'radio' : 'checkbox'}
                onChange={onSelectOption}
                checked={checked}
                disabled={disabled}
            />
        </div>

    )
};

export default Option;