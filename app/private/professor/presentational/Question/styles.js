import styled from 'styled-components';

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: #f6fdff;
    margin: 10px 0;
    .questionTypes{
        display: flex;
        justify-content: center;
        width: 100%;
        > div{
            margin: 0 30px;
        }
    }
    > .form-group {
        width: 100%;
        input{
            text-align: center;
            font-size: 1.3125rem;
            background-color: rgb(33,150,243);
            color: #FFFFFF;
        }
    }
    .addOptionBtn{
        align-self: flex-end;
    }
`;