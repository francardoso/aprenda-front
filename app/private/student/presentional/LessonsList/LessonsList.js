import React from 'react';

import Card from '../../../commons/presentational/Card/Card';

//styles
import { ListContainer } from './styles';

const LessonsList = ({
    lessons,
    goToLesson
}) =>{
    return (
        <ListContainer>
            {
                lessons.map((lesson)=>{
                    return(
                        <Card 
                            key={lesson._id} 
                            title={lesson.title} 
                            onClick={()=>goToLesson(lesson._id)}/>
                    )
                })
            }
        </ListContainer>
    )
};

export default LessonsList;