import React, { useState } from 'react';

export function Training({ listOfThings, addItem, deleteItem, editItem }) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [year, setYear] = useState('');
    const [editId, setEditId] = useState(null);

    const handleAddItem = () => {
        const newItem = {
            id: listOfThings.length + 1,
            name,
            lastName,
            year
        };
        addItem(newItem);
    };

    const handleEditItem = () => {
        const updatedItem = {
            id: editId,
            name,
            lastName,
            year
        };
        editItem(editId, updatedItem);
        setEditId(null);
    };

    return (
        <div>
            <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)} />
            <br />
            <br />
            <input type="number" placeholder="Enter Birth Year" onChange={(e) => setYear(e.target.value)} />
            <br />
            <br />
            {editId ? (
                <button onClick={handleEditItem}>Update Item</button>
            ) : (
                <button onClick={handleAddItem}>Add Item</button>
            )}
            <br />
            <br />
            
            <table style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>ID</th>
                        <th style={{ border: '1px solid black' }}>Name</th>
                        <th style={{ border: '1px solid black' }}>Last Name</th>
                        <th style={{ border: '1px solid black' }}>Birth Year</th>
                        <th style={{ border: '1px solid black' }}>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {listOfThings.map((item, i) => (
                        <tr key={item.id}>
                            <td style={{ border: '1px solid black' }}>{i + 1}</td>
                            <td style={{ border: '1px solid black' }}>{item.name}</td>
                            <td style={{ border: '1px solid black' }}>{item.lastName}</td>
                            <td style={{ border: '1px solid black' }}>{item.year}</td>
                            <td style={{ border: '1px solid black' }}>
                                <button onClick={() => deleteItem(item.id)}>Delete</button>
                                <button onClick={() => setEditId(item.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


