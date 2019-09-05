import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledLayout = styled.div`
    display: flex;
`;

const Layout = ({children}) =>{
    return(
        <>
            <Header/>
            <StyledLayout>
                {children}
            </StyledLayout>
        </>
    )
}

export default Layout;