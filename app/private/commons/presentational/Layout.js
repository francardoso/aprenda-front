import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

const Layout = ({children, header}) =>{
    return(
        <>
            {header}
            <StyledLayout>
                {children}
            </StyledLayout>
        </>
    )
}

export default Layout;