import React from 'react';
import Layout from '../../commons/presentational/Layout';
import Header from '../presentational/Header';

import HeaderContainer from '../containers/HeaderContainer';
import LessonsContainer from '../containers/LessonsContainer';

const Lessons = ({history}) =>{
    return (
        <Layout
            header={<HeaderContainer/>}>
            <LessonsContainer history={history}/>
        </Layout>
    )
};

export default Lessons;