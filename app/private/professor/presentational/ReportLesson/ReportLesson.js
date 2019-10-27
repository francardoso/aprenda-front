import React from 'react';

import Question from '../Question';
import CustomPieChart from '../CustomPieChart';

import Container from './styles';

const ReportLesson =  ({
    lesson
}) =>{
    if(!lesson) return <p>Loading....</p>
    const chartData = [
        {
            name: 'Alunos matriculados',
            value: lesson.students.length
        },
        {
            name: 'Alunos que responderam',
            value: lesson.respondents.length
        }
    ]
    return(
        <Container>
            <h1>{lesson.title}</h1>
            <CustomPieChart
                data={chartData}
                noDataText="Nenhum aluno matriculado"
                icon="fas fa-user-slash"
            />
            <>
                <h3 id="questionsHeader">Questões</h3>
                {lesson.questions.map((question, index)=>{
                    const colors = ['#90CC9C', '#D15E53', '#C5C3B4'];
                    const correctStudents = question.correctStudents || [];
                    const incorrectStudents = question.incorrectStudents || [];
                    const questionChartData = [
                        {
                            name: 'Acertos',
                            value: correctStudents.length,
                        },
                        {
                            name: 'Errados',
                            value: incorrectStudents.length,
                        },
                        {
                            name: 'Não respondentes',
                            value: lesson.students.length - incorrectStudents.length - correctStudents.length
                        }
                    ]
                    return (
                        <React.Fragment key={index}>
                            <Question
                                title={question.title}
                                index={index}
                                type={question.type}
                                readOnly
                                options={question.options}
                                customClass="question"
                            />
                            <CustomPieChart
                                data={questionChartData}
                                noDataText="Nenhum aluno respondeu"
                                icon="fas fa-pencil-alt"
                                colors={colors}
                            />
                        </React.Fragment>
                    )
                })}
            </>
        </Container>

    )
}

export default ReportLesson;