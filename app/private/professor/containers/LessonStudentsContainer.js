import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { setUsers } from '../actions/users';

import UsersList from '../presentational/UsersList';

const mapStateToProps = state => ({
    users: state.usersReducer.users
});

const mapDispatchToProps = dispatch =>({
    _setUsers: users => dispatch(setUsers(users))
});

const LessonStudentsContainer = ({
    idLesson,
    students,
    setStudents,
    users,
    _setUsers
}) =>{
    const [selectedUsignedStudents, setSelectedUnsignedStudents] = useState([]); 
    const [selectedEnrolledStudents, setSelectedEnrolledStudents] = useState([]);
    useEffect(()=>{
        if(users.length === 0){
            fetchUsers();
        }
    },[]);

    async function fetchUsers(){
        const response = await fetch(`${SERVER_URL}/getUsers`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        const ans = await response.json();
        if(!ans.error){
            _setUsers(ans);
        }
    }
    function onSelectUnsignedStudent(student, checked){
        if(checked){
            setSelectedUnsignedStudents([...selectedUsignedStudents,student._id]);
        }else{
            const studentIndex = selectedUsignedStudents.indexOf(student._id);
            setSelectedUnsignedStudents(
                [...selectedUsignedStudents.slice(0, studentIndex),
                ...selectedUsignedStudents.slice(studentIndex +1, selectedUsignedStudents.length)]
            );
        }
    }

    function onSelectEnrolledStudent(student,checked){
        if(checked){
            setSelectedEnrolledStudents([...selectedEnrolledStudents,student._id]);
        }else{
            const studentIndex = selectedEnrolledStudents.indexOf(student._id);
            setSelectedEnrolledStudents(
                [...selectedEnrolledStudents.slice(0, studentIndex),
                ...selectedEnrolledStudents.slice(studentIndex +1, selectedEnrolledStudents.length)]
            );
        }
    };

    async function enrollStudents(event){
        const response = await fetch(`${SERVER_URL}/enrollStudents`,{
            method: 'PUT',
            body:JSON.stringify({
                idLesson,
                students: selectedUsignedStudents
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        const ans = await response.json();
        if(!ans.error){
            setStudents(ans);
            setSelectedUnsignedStudents([]);
        }
    };

    async function unenrollStudents(event){
        const response = await fetch(`${SERVER_URL}/unenrollStudents`,{
            method: 'PUT',
            body:JSON.stringify({
                idLesson,
                students: selectedEnrolledStudents
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        const ans = await response.json();
        if(!ans.error){
            setStudents(ans);
            setSelectedEnrolledStudents([]);
        }
    };

    function idsToUsersInformations(ids){
        const usersInformations = ids.map(id=>{
            const userIndex = users.findIndex(user=> user._id === id);
            if(userIndex !== -1){
                return users[userIndex];
            }else{
                return id;
            } 
        });
        return usersInformations;
    }
    return (
        <>
            <UsersList
                users={idsToUsersInformations(students)}
                onSelect={onSelectEnrolledStudent}
                unlockActionButton={selectedEnrolledStudents.length > 0}
                actionButtonLabel='Desmatricular'
                onAction={unenrollStudents}
            />

            <UsersList
                users={users.filter(user=>students.indexOf(user._id) === -1)}
                onSelect={onSelectUnsignedStudent}
                unlockActionButton={selectedUsignedStudents.length > 0}
                actionButtonLabel='Matricular'
                onAction={enrollStudents}
            />
        </>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonStudentsContainer);