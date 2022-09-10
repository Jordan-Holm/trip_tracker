import { useEffect, useState } from "react";

const UserForm = ({ addUser, id, username, email, password, setEdit, updateUser}) => {
    const [user, setUser] = useState({ username: '', email: '', password: '' })

    useEffect( () => {
        if (id) {
            setUser({ username, email, password })
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id){
            updateUser(id, user)
            setEdit(false)
        } else {
            addUser(user)
        }

        setUser({ username: '', email: '',  password: '' })
    }

    return(
        <>
            <h2>{ id ? 'Edit' : 'Create'}</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    name='username'
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}

                    required
                />
                <label>email</label>
                <input 
                    name='email'
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                />
                <label>password</label>
                <input 
                    name='password'
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default UserForm;