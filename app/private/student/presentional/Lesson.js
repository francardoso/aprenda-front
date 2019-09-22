import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';

const Lesson = ({
    lesson
})=>{
    return (
        <>
            {
                Object.keys(lesson).length > 0 ?
                <>
                    <p>{lesson.title}</p>
                    {
                        lesson.questions.map((question,index)=>{
                            return (
                                <QuestionContainer key={index} question={question}/>
                            )
                        })
                    }
                </>
                :
                <p>carregando</p>
            }
        </>
    )
};

export default Lesson;