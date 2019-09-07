import React from 'react';
import LessonsContainer from '../containers/LessonsContainer';
import Layout from '../../commons/presentational/Layout';
import Header from '../presentional/Header';

const Lessons = () =>{
    return (
        <Layout
            header={<Header/>}>
            <LessonsContainer/>
        </Layout>
    )
};

export default Lessons;