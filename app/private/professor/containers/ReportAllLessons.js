import  React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../../../settings';
import { PieChart, Pie, Tooltip } from 'recharts';

const ReportAllLessons = ({}) =>{
    const [totalLessons, setTotalLessons] = useState(0);
    useEffect(()=>{
        getAllLessonsReport();
    },[]);

    async function getAllLessonsReport(){
        const response = await fetch(`${SERVER_URL}/getAllLessons`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include'
        });
        const ans = await response.json();
        if(!ans.error){
            setTotalLessons(ans.length);
        }
    }
    return (
        <PieChart width={730} height={250}>
            <Pie 
                data={[{name: 'Total de lições', value: totalLessons}]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
                label
            />
            <Tooltip />
        </PieChart>
    );
}

export default ReportAllLessons;