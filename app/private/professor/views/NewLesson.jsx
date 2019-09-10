import React from 'react';
import Layout from '../../commons/presentational/Layout';
import Header from '../presentational/Header';
import LessonContainer from '../containers/LessonContainer';

const NewLesson = ({history}) =>{
    return (
        <Layout
            header={<Header/>}
        >
            <LessonContainer/>
        </Layout>
    )
};

export default NewLesson;