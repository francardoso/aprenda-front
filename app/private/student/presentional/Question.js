import React from 'react';

import Option from './Option';
import Button from '../../commons/presentational/Button';

const Question = ({
    question,
    onSelectOption, 
    selectedOption,
    checkAnswer,
    unlockActionBtn,
    disabled
})=>{
    return(
        <>
            <p>{question.title}</p>
            {
                question.options.map((option,index)=>{
                    return (
                        <Option 
                            key={index}
                            checked={selectedOption === index}
                            option={option}
                            type={question.type}
                            onSelectOption={()=>onSelectOption(index)}
                            disabled={disabled}
                        />
                    )
                })
            }
            {
                unlockActionBtn &&
                <Button onClick={checkAnswer} label='enviar'/>
            }
        </>
    )
};

export default Question;