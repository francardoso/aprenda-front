import React from 'react';

import ReportAllLessons from '../../containers/ReportAllLessons';
import ReportAllStudents from '../../containers/ReportAllStudents';
import ReportAllAnswers from '../../containers/ReportAllAnswers';

import Container from './styles';

const MainReports = () =>{
    return (
        <Container>
            <div>
                <h3>Total de atividades</h3>
                <ReportAllLessons />
            </div>
            <div>
                <h3>Total de usuários</h3>
                <ReportAllStudents />
            </div>
            <div>
                <h3>Total de respostas</h3>
                <ReportAllAnswers />
            </div>
        </Container>
    )
};

export default MainReports;