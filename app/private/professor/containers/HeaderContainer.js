import React from 'react';
import { SERVER_URL } from '../../../../settings';

import Header from '../presentational/Header';

const HeaderContainer = ({
    history
}) =>{
    async function logout(){
        const response = await fetch(`${SERVER_URL}/logout`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        const ans = await response.json();
        if(!ans.error){
            window.location.reload();
        }
    }
    return (
        <Header
            logout={logout}
        />
    )
};

export default HeaderContainer;