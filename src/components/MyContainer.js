import MyList from './MyList'
import React, { useState } from 'react';


function MyContainer() {
    const [items, setItems] = useState([
        { id: "1", text: "This is an item" },
        { id: "2", text: "Also this"},
    ]);

    const [newItemText, setNewItemText] = useState('')

    const onClick = (e) => {
        e.preventDevault();
        if (newItemText.trim() !== '') {
            const newItem = {
                id: (items.length + 1).toString(),
                text: newItemText.trim()
            };
            setItems([...items, newItem]);
            setNewItemText('');
        };
    };


    return (
        <div>
            <MyList
                    header="Really epic list component"
                    items={items}
            />
            <textarea
                value={newItemText}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter new item text"
            />
            <button type="submit" onClick={onClick}></button>
        </div>
    );
}

export default MyContainer;