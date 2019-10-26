import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';

import Layout from '../../commons/presentational/Layout';
import MainReports from '../presentational/MainReports';

const Reports = ({}) =>{
    return (
        <Layout
            header={<HeaderContainer/>}
        >
            <MainReports />
        </Layout>
    )
};

export default Reports;