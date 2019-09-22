import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';
import LessonContainer from '../containers/LessonContainer';

import Layout from '../../commons/presentational/Layout';

const Lesson = ({
    match:{
        params:{
            idLesson
        }
    }
})=>{
    return (
        <Layout
            header={<HeaderContainer/>}
        >
            <LessonContainer idLesson={idLesson}/>
        </Layout>
    )
};

export default Lesson;