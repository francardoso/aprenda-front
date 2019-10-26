import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../../../../settings';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const ReportAllAnswers = () => {
    const [totalAnswers, setTotalAnswers] = useState(0);
    useEffect(()=>{
        getAllAnswers();
    },[]);

    async function getAllAnswers(){
        const response = await fetch(`${SERVER_URL}/getAnswersTotal`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include'
        });
        const ans = await response.json();
        if(!ans.error){
            setTotalAnswers(ans);
        }
    }
    return (
        <ResponsiveContainer height='100%' width='100%'>
            <PieChart >
                <Pie 
                    data={[{name: 'Total de respostas', value: totalAnswers}]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#FFBB28"
                    label
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
};

export default ReportAllAnswers;