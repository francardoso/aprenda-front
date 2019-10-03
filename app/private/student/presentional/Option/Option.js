import React from 'react';

import Input from '../../../commons/presentational/Input';

import {
    OptionContainer,
    P,
} from './styles';

const Option = ({
    option,
    type,
    onSelectOption,
    checked,
    disabled,
})=>{
    return(
        <OptionContainer>
            <Input 
                type={type === 'single' ? 'radio' : 'checkbox'}
                onChange={onSelectOption}
                checked={checked}
                disabled={disabled}
                style={{
                    backgroundColor: '#2196F3',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px 0',
                }}
            />
            <P>{option.title}</P>
        </OptionContainer>

    )
};

export default Option;