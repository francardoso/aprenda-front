import styled from 'styled-components';

export default styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    > div {
        flex: 1 0 25%;
        margin: 0 15px;
        width: 100%;
        height: 300px;
        h3{
            text-align: center;
        }
    }
`;