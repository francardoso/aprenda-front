import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer';

import Layout from '../../commons/presentational/Layout';
import MainReports from '../presentational/MainReports';
import LessonList from '../presentational/LessonsList';
import UsersList from '../presentational/UsersList';

const Reports = ({}) =>{
    const { lessons } = useSelector(state=>state.lessonsReducer);
    const { users } = useSelector(state=>state.usersReducer);
    const history = useHistory();
    function onSelectLesson(idLesson){
        history.push(`/professor/reports/lesson/${idLesson}`);
    }
    function onSelectUser(idUser){
        history.push(`/professor/reports/user/${idUser}`);
    }
    return (
        <Layout
            header={<HeaderContainer/>}
        >
            <MainReports />
            <LessonList lessons={lessons} onSelectLesson={onSelectLesson} />
            <UsersList users={users} onSelectUser={onSelectUser} />
        </Layout>
    )
};

export default Reports;