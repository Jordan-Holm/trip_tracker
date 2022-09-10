import { useState, useEffect } from 'react';
import axios from 'axios';
import UserLists from'./UserList';
import UserForm from './UserForm';

const Users =() => {
    const [users, setUsers] = useState([])
    
    //index
    useEffect( () => {
        axios.get('/api/users')
            .then( res => {
                setUsers(res.data)
            })
            .catch( err => console.log(err) )
    }, [])

    //Create
    const addUser = (user) => {
        axios.post( '/api/users' , { user } )
            .then( res => {
                setUsers([...users, res.data])
            })
            .catch( err => console.log(err))
    }

    const updateUser = (id, user) => {
        axios.put(`/api/users/${id}`, { user })
            .then( res => {
                let newUpdatedUser = users.map( m => {
                    if (m.id === id) {
                        return res.data
                    }
                    return m
                })
                setUsers(newUpdatedUser)
            })
            .catch( err => console.log(err) )
    }

    const deleteUser = (id) => {
        axios.delete(`/api/users/${id}`)
        .then ( res => {
            setUsers(users.filter( m => m.id !== id))
        })
        .catch( err => console.log(err) )
    }

    return (
        <>
            <h1>All Users</h1>
            <UserForm 
                addUser={addUser}
            />

            <UserLists 
                users={users}
                updateUser={updateUser}
                deleteUser={deleteUser}
            />
        </>
    )
}

export default Users;