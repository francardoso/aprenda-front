import React from 'react';
import LessonsContainer from '../containers/LessonsContainer';
import Layout from '../../commons/presentational/Layout';

import HeaderContainer from '../containers/HeaderContainer';

const Lessons = () =>{
    return (
        <Layout
            header={<HeaderContainer/>}>
            <LessonsContainer/>
        </Layout>
    )
};

export default Lessons;