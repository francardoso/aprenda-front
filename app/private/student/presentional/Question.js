import React from 'react';

import Option from './Option';

const Question = ({
    question,
    onSelectOption, 
    selectedOption
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
                        />
                    )
                })
            }
        </>
    )
};

export default Question;