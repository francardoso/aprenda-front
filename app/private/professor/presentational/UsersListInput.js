import React from 'react';
import styled from 'styled-components';

import Input from '../../commons/presentational/Input';
import Button from '../../commons/presentational/Button';

const Ul = styled.ul`
    margin: 40px 10px;
`;

const UsersList = ({
    users,
    onSelect,
    unlockActionButton,
    actionButtonLabel,
    onAction
}) =>{
    return (
        <>
            <Ul className="list-group">
                {
                    users.length === 0 ?
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Nenhum usuário
                    </li>
                    :
                    users.map((user,index)=>{
                        return (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {user.name}
                                <Input
                                    type='checkbox'
                                    index={index}
                                    onChange={(event)=>onSelect(user, event.target.checked)}
                                />
                            </li>
                        )
                    })
                }
            </Ul>
            {
                unlockActionButton &&
                <Button
                    label={actionButtonLabel}
                    onClick={onAction}
                />   
            }
        </>
    )
};

export default UsersList;