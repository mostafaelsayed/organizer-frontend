import { useEffect, useState } from 'react'
import { getAllUsersApi } from '../../api/user.ts';

export default function GetAllUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getAllUsers () {
            let response = await getAllUsersApi();
            const data = response._data.map(user => {
                return (
                    <li key={user.id}>{user.id} with email: {user.email}</li>
                )
            });
            
            setUsers(data);
            
        }
        getAllUsers();
    }, []);
    return (
        <ul>
            {users}
        </ul>
    );
}