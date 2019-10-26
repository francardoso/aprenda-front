import React from 'react';

import Container from './styles';

const LessonsList = ({
    lessons,
    onSelectLesson,
}) =>{
    return (
        <>
            <h5>Atividades</h5>
            <Container className="list-group">
                {
                    lessons.map((lesson, index) =>{
                        return(
                            <li 
                                className="list-group-item d-flex justify-content-between align-items-center"
                                onClick={() => onSelectLesson(lesson._id)}
                                key={lesson._id}>
                                {lesson.title}
                            </li>
                        )
                    })
                }
            </Container>
        </>
    )
};

export default LessonsList;