import React from 'react';

import Ul from './styles';

const UsersList = ({
    users,
    onSelectUser,
}) => {
    return (
        <>
            <h5>Usuários</h5>
            <Ul className="list-group">
                {
                    users.length === 0 ?
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Nenhum usuário
                    </li>
                    :
                    users.map((user,index)=>{
                        return (
                            <li 
                                key={index} 
                                className="list-group-item d-flex justify-content-between align-items-center"
                                onClick={()=>onSelectUser(user._id)}   
                            >
                                {user.name}
                            </li>
                        )
                    })
                }
            </Ul>
        </>
    )
};

export default UsersList;