import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: absolute;
    right:10px;
    bottom:0;
`;
const AlertBox = ({message, hideBox}) =>{
    return (
        <Box className='alert alert-dismissible alert-primary'>
            <button 
                type="button"
                className="close"
                data-dismiss="alert"
                onClick={hideBox}>&times;</button>
            <span>{message}</span>
        </Box>
    )
}
export default AlertBox;