import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';
import LessonContainer from '../containers/LessonContainer';
import ModalContainer from '../containers/ModalContainer';

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
            <ModalContainer />
            <LessonContainer idLesson={idLesson}/>
        </Layout>
    )
};

export default Lesson;