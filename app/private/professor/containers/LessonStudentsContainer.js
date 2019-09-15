import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { setUsers } from '../actions/users';

const mapStateToProps = state => ({
    users: state.usersReducer.users
});

const mapDispatchToProps = dispatch =>({
    _setUsers: users => dispatch(setUsers(users))
});

const LessonStudentsContainer = ({
    students,
    users,
    _setUsers
}) =>{

    useEffect(()=>{
        if(users.length === 0){
            fetchUsers();
        }
    },[]);
    console.log('foo students', students, 'users', users);

    async function fetchUsers(){
        const response = await fetch(`${SERVER_URL}/getUsers`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const ans = await response.json();
        if(!ans.error){
            _setUsers(ans);
        }
    }
    return (
        <div>
            estudantes matriculados: {students.length}
            <h1>Outros estudantes: {users.length} </h1>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonStudentsContainer);