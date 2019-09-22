import React from 'react';
import { Link } from 'react-router-dom';

const LessonsList = ({
    lessons
}) =>{
    return (
        <div>
            {
                lessons.map((lesson)=>{
                    return(
                        <Link key={lesson._id} to={`/lessons/${lesson._id}`}>
                            {lesson.title}
                        </Link>
                    )
                })
            }
        </div>
    )
};

export default LessonsList;