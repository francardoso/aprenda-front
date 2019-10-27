import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';
import ReportUserContainer from '../containers/ReportUserContainer';

import Layout from '../../commons/presentational/Layout';

const ReportUser = ({
    match:{
        params:{
            id
        }
    },
}) => {
    return (
        <Layout header={<HeaderContainer />}>
            <ReportUserContainer idUser={id}/>
        </Layout>
    )
};

export default ReportUser;