import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PieChart, Pie, Cell,Tooltip, ResponsiveContainer } from 'recharts';
import { SERVER_URL } from '../../../../settings';

import { setUsers } from '../actions/users';

const COLORS = ['#0088FE', '#00C49F'];

const ReportAllStudents = ({ }) => {
    const dispatch = useDispatch();
    const [totalUsers, setTotalUsers] = useState([
        {
            name: 'Professores',
            value: 0,
        },
        {
            name: 'Alunos',
            value: 0,
        }
    ]);
    useEffect(() => {
        getAllStudentsReport();
    }, []);

    async function getAllStudentsReport() {
        const response = await fetch(`${SERVER_URL}/getUsers`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const ans = await response.json();
        if (!ans.error) {
            const students = ans.filter((usr) => usr.role === 'student');
            const professors = ans.filter((usr) => usr.role === 'professor');
            setTotalUsers([
                {
                    name: 'Professores',
                    value: professors.length
                },
                {
                    name: 'Alunos',
                    value: students.length
                }
            ]);
            dispatch(setUsers(ans));
        }
    }
    return (
        <ResponsiveContainer height='100%' width='100%'>
            <PieChart>
                <Pie 
                    data={totalUsers}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={50}
                    label
                    startAngle={45}
                    endAngle={405}
                >
                    {
                        totalUsers.map((user, index) => {
                        return (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                                />
                            )})
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
};

export default ReportAllStudents;