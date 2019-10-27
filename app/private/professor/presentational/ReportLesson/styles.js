import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f6fdff;
    h1{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 10px;
        margin: 15px 0;
    }
    #questionsHeader{
        width: 50%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    .chartHolder{
        width: 100%;
        height: 150px;
    }
    .question{
        .option{
            p.selected{
                color: green;
            }
        }
    }
`;