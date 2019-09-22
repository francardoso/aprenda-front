import React from 'react';

import Input from '../../commons/presentational/Input';

const Option = ({
    option,
    type,
    onSelectOption,
    checked
})=>{
    return(
        <div>
            <p>{option.title}</p>
            <Input 
                type={type === 'single' ? 'radio' : 'checkbox'}
                onChange={onSelectOption}
                checked={checked}
            />
        </div>

    )
};

export default Option;