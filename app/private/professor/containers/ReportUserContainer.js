import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../../../../settings';

import ReportUser from '../presentational/ReportUser';

const ReportUserContainer = ({
    idUser
}) => {
    const [user, setUser] = useState(undefined);
    async function getUserReport() {
        const url = new URL(`${SERVER_URL}/getStudentReport`);
        url.search = new URLSearchParams({
            idStudent: idUser
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
        if (!ans.error) {
            setUser(ans);
        }
    }

    useEffect(()=>{
        getUserReport();
    }, [])
    if (!user) return <p>Loading...</p>
    return (
        <ReportUser user={user} />
    )
};

export default ReportUserContainer;