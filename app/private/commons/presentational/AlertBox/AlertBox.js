import React, { useEffect } from 'react';

import Box from './styles';

const AlertBox = ({
    message,
    hideBox,
    id
}) =>{
    useEffect(()=>{
        setTimeout(() => {
            hideBox(id);
        }, 4000);
    }, []);
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