import styled from 'styled-components';

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    > .form-group {
        width: 100%;
        input{
            text-align: center;
            font-size: 2.1875rem;
        }
    }
    .saveLessonBtn{
        align-self: flex-end;
        height: 60px;
        margin: 10px;
    }
`;