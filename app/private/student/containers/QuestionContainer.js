import React, { useState } from 'react';
import Question from '../presentional/Question';

const QuestionContainer = ({
    question
})=>{
    const [selectedOption, setSelectedOption] = useState(null);
    function onSelectOption(optionIndex){
        setSelectedOption(optionIndex);
    }
    return(
        <Question 
            question={question}
            onSelectOption={onSelectOption}
            selectedOption={selectedOption}
        />
    )
};

export default QuestionContainer;