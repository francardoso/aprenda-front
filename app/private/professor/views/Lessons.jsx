import React from 'react';
import Layout from '../../commons/presentational/Layout';
import Header from '../presentational/Header';
import LessonsContainer from '../containers/LessonsContainer';

const Lessons = ({history}) =>{
    return (
        <Layout
            header={<Header/>}>
            <LessonsContainer history={history}/>
        </Layout>
    )
};

export default Lessons;