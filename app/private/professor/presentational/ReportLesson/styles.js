import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f6fdff;
    .question{
        .option{
            p.selected{
                color: green;
            }
        }
    }
`;