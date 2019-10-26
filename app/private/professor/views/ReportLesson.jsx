import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';

import Layout from '../../commons/presentational/Layout';

const ReportLesson = ({
    idLesson,
}) =>{
    return(
        <Layout header={<HeaderContainer/>}>
            <p>aqui vão detalhes da atividade</p>
        </Layout>
    )
};

export default ReportLesson;