import React from 'react';
import Layout from '../../commons/presentational/Layout';
import Header from '../presentational/Header';

import HeaderContainer from '../containers/HeaderContainer';
import LessonContainer from '../containers/LessonContainer';

const NewLesson = ({history}) =>{
    return (
        <Layout
            header={<HeaderContainer/>}
        >
            <LessonContainer/>
        </Layout>
    )
};

export default NewLesson;