import React from 'react';
import { Link } from 'react-router-dom';

const LessonsList = ({lessons}) =>{
    return (
        <div>
            {
                lessons.map((lesson, index) =>{
                    return(
                        <Link to={`/professor/lessons/${lesson._id}`} key={index}>
                            <div>
                                {lesson.title}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
};

export default LessonsList;