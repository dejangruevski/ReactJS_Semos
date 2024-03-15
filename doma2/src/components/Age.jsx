import React from 'react';

export const Age = ({ users }) => {

    const olderThan18 = users.filter(user => user.age > 18);
    const youngerThan18 = users.filter(user => user.age <= 18);

    return (
        <div>
            <h2>Users older than 18:</h2>
            <ul>
                {olderThan18.map(user => (
                    <li key={user.firstName}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
            {youngerThan18.length > 0 && (
                <p>Users less than 18: {youngerThan18.map(user => `${user.firstName} ${user.lastName}`).join(', ')}</p>
            )}
            {youngerThan18.length === 0 && <p>All users are older than 18</p>}
        </div>
    );
}

