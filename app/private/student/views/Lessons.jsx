import React from 'react';
import LessonsContainer from '../containers/LessonsContainer';
import Layout from '../../commons/presentational/Layout';

import HeaderContainer from '../containers/HeaderContainer';

const Lessons = ({
    history
}) =>{
    return (
        <Layout
            header={<HeaderContainer/>}>
            <LessonsContainer
                history={history}
            />
        </Layout>
    )
};

export default Lessons;