import React from 'react';

export const Address = ({ users }) => {
    return (
        <div>
            <h2>Users living in Skopje:</h2>
            <ul>
                {users.map(user => (
                    user.address === 'Skopje' ? <li key={user.firstName}>{user.firstName} {user.lastName}</li> : null
                ))}
            </ul>
        </div>
    );
}