import React from 'react';

const LessonsList = ({lessons}) =>{
    return (
        <div>
            {
                lessons.map((lesson, index) =>{
                    return(
                        <div key={index}>
                            {lesson._id}
                        </div>
                    )
                })
            }
        </div>
    )
};

export default LessonsList;