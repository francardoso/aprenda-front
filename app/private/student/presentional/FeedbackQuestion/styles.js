import styled from 'styled-components';

export default styled.div`
    position: relative;
    background-color: rgb(33,150,243);
    color: #FFFFFF;
    > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }
    i {
        font-size: 4.6em;
        &.correct{
            color: #9bea75;
        }
        &.incorrect{
            color: #ff5555;
        }
    }
    .closeModal{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 1.6em;
        cursor: pointer;
    }
    h1{
        margin-top: 20px;
    }
`;