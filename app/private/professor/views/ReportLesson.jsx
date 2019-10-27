import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';
import ReportLessonContainer from '../containers/ReportLessonContainer';

import Layout from '../../commons/presentational/Layout';

const ReportLesson = ({
    match:{
        params:{
            id
        }
    },
}) =>{
    return(
        <Layout header={<HeaderContainer/>}>
            <ReportLessonContainer idLesson={id}/>
        </Layout>
    )
};

export default ReportLesson;