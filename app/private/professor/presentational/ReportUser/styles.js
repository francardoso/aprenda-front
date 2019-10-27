import styled from 'styled-components';

export default styled.div`
    padding: 10px;
    .lesson{
        background-color: #EFEFEF;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
        .question{
            i{
                margin-left: 5px;
                color: #C5C3B4;
                &.correct{
                    color: #90CC9C;
                }
                &.incorrect{
                    color: #D15E53;
                }
            }
        }
    }
`;