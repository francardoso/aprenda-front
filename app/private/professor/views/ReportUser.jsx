import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';

import Layout from '../../commons/presentational/Layout';

const ReportUser = ({
    idUser,
}) => {
    return (
        <Layout header={<HeaderContainer />}>
            <p>aqui vão detalhes do aluno</p>
        </Layout>
    )
};

export default ReportUser;