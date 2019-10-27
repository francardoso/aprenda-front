import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../../../settings';

import ReportLesson from '../presentational/ReportLesson';

const ReportLessonContainer = ({
    idLesson,
}) => {
    const [lesson, setLesson] = useState(undefined);
    useEffect(() => {
        getLessonReport();
    }, []);

    async function getLessonReport() {
        const url = new URL(`${SERVER_URL}/getLessonReport`);
        url.search = new URLSearchParams({
            idLesson
        });
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        const ans = await response.json();
        if(!ans.error){
            setLesson(ans);
        }
    };
    return (
        <ReportLesson lesson={lesson} />
    )
}

export default ReportLessonContainer;