import  React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SERVER_URL } from '../../../../settings';
import { PieChart, Pie, Tooltip , ResponsiveContainer} from 'recharts';

import { setLessons } from '../../commons/actions/lessons';

const ReportAllLessons = ({}) =>{
    const [totalLessons, setTotalLessons] = useState(0);
    const dispatch = useDispatch();
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
            dispatch(setLessons(ans));
        }
    }
    return (
        <ResponsiveContainer height='100%' width='100%'>
            <PieChart>
                <Pie 
                    data={[{name: 'Total de atividades', value: totalLessons}]}
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
        </ResponsiveContainer>
    );
}

export default ReportAllLessons;