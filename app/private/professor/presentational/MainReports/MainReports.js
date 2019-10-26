import React from 'react';

import ReportAllLessons from '../../containers/ReportAllLessons';
import ReportAllStudents from '../../containers/ReportAllStudents';

const MainReports = () =>{
    return (
        <div>
            <p>aqui vao ficar todos os principais reports</p>
            <ReportAllLessons />
            <ReportAllStudents />
            
        </div>
    )
};

export default MainReports;