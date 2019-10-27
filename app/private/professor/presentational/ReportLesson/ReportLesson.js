import React from 'react';

import Question from '../Question';

import Container from './styles';

const ReportLesson =  ({
    lesson
}) =>{
    if(!lesson) return <p>Loading....</p>
    return(
        <Container>
            <h1>{lesson.title}</h1>
            <div>alunos matriculados: {lesson.students.map((student)=>{
                return (
                    <p key={student}>{student}</p>
                )
            })}</div>
            <>
                <p>questões</p>
                {lesson.questions.map((question, index)=>{
                    return (
                        <Question
                            key={index} 
                            title={question.title}
                            index={index}
                            type={question.type}
                            readOnly
                            options={question.options}
                            customClass="question"
                        />
                    )
                })}
            </>
        </Container>

    )
}

export default ReportLesson;