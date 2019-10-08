import React from 'react';

import Option from '../Option';
import Button from '../../../commons/presentational/Button';

//styles
import {
    QuestionContainer,
    QuestionTitle,
} from './styles';

const Question = ({
    question,
    onSelectOption, 
    selectedOptions,
    checkAnswer,
    unlockActionBtn,
    disabled
})=>{
    return(
        <QuestionContainer>
            <QuestionTitle>{question.title}</QuestionTitle>
            {
                question.options.map((option,index)=>{
                    return (
                        <Option 
                            key={index}
                            checked={selectedOptions.indexOf(index) !== -1}
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
        </QuestionContainer>
    )
};

export default Question;