import React from 'react';

import QuestionContainer from '../../containers/QuestionContainer';

// styles
import { 
    LessonContainer,
    LessonTitle,
} from './styles';

const Lesson = ({
    lesson
})=>{
    return (
        <LessonContainer>
            {
                Object.keys(lesson).length > 0 ?
                <>
                    <LessonTitle>{lesson.title}</LessonTitle>
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
        </LessonContainer>
    )
};

export default Lesson;