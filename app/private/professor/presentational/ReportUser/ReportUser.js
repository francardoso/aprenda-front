import React from 'react';

import LessonsContainer from './styles';

const ReportUser = ({
    user
}) => {
    function checkAnswer(userAns, realAns){
        return userAns.sort().join(',') === realAns.sort().join(',');
    }
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">{user.name}</h1>
                <p><b>E-mail: </b>{user.email}</p>
                <p><b>Papel: </b>{user.role}</p>
            </div>
            <LessonsContainer>
                <h2><b>Atividades matriculadas</b></h2>
                <hr className="my-4"></hr>
                {
                    user.lessons.map((lesson, index) =>{
                        return (
                            <div key={index} className="lesson">
                                <h4>{lesson.title}</h4>
                                <div>
                                    {
                                        lesson.questions.map((question, index) =>{
                                            return (
                                                <div key={index} className="question">
                                                    <p>
                                                        <b>Pergunta {index +1 }:</b> 
                                                        {` ${question.title}`}
                                                    </p>
                                                    <p>
                                                        Status:
                                                        {
                                                            question.answer ? 
                                                                checkAnswer(question.answer.studentAnswers, question.answer.questionAnswers) ?
                                                                    <i className="fas fa-check correct"></i> 
                                                                    : 
                                                                    <i className="fas fa-times incorrect"></i> 
                                                                : 
                                                                <i className="fas fa-question"></i>
                                                        }
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </LessonsContainer>
        </>
    )
};

export default ReportUser;