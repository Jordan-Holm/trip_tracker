import { useState } from "react";
import UserForm from "./UserForm";

const UserShow = ({ id, username, email, password, updateUser, deleteUser}) => {
    const [editing, setEdit] = useState(false)

    return (
        <>
            <h3>{username}</h3>
            {
                editing ?
                <>
                    <UserForm 
                        updateUser={updateUser}
                        id={id}
                        username={username}
                        email={email}
                        password={password}
                        setEdit={setEdit}
                    />
                    <button 
                        onClick={() => setEdit(false)}
                    >
                        Cancel
                    </button>
                </>
                :
                <button
                    onClick={() => setEdit(true)}
                >
                    Edit
                </button>
            }
            <button
                onClick={() => deleteUser(id)}
            >
                Delete
            </button>
        </>
    )
}

export default UserShow;