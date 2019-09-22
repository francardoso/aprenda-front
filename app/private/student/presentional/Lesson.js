import React from 'react';

import QuestionContainer from '../containers/QuestionContainer';

import Button from '../../commons/presentational/Button';

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
                                <QuestionContainer 
                                    key={index} 
                                    question={question}
                                    index={index}
                                    idLesson={lesson._id}
                                />
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