import React from 'react';
import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Cell,
    Tooltip,
    Legend 
} from 'recharts';

import { NoDataHolder } from './styles';

const CustomPieChart = ({
    data,
    colors = ['#0088FE', '#00C49F'],
    noDataText = 'Nenhum dado encontrado',
    icon = 'far fa-folder-open'
}) => {
    const valueTotal = data.reduce((acc,curr) => acc += curr.value, 0);
    console.log('value total', valueTotal);
    return (
        <>
            {
                valueTotal > 0 ?
                <div className="chartHolder">
                    <ResponsiveContainer height='100%' width='100%'>
                        <PieChart>
                            <Pie 
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={50}
                                label
                                startAngle={45}
                                endAngle={405}
                            >
                                {
                                    data.map((user, index) => {
                                    return (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={colors[index % colors.length]}
                                            />
                                        )})
                                }
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                :
                <NoDataHolder>
                    <p>{noDataText}</p>
                    <i className={icon}></i>
                </NoDataHolder>
            }
        </>
    )
};

export default CustomPieChart;