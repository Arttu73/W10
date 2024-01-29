import MyList from './MyList'
import React, { useState } from 'react';


function Container() {
    const [items, setItems] = useState([
        { id: "1", text: "This is an item" },
        { id: "2", text: "Also this"},
    ]);

    const [newItemText, setNewItemText] = useState('')

    const onClick = (e) => {
        e.preventDevault();
        if (newItemText.trim() != '') {
            const newItem = {
                id: (items.length + 1).toString(),
                text: newItemText.trim()
            };
            setItems([...items, newItem]);
            setNewItemText('');
        };
    };

    const textAreaChange = (e) => {
        setNewItemText(e.target.value);
    }

    return <container>
        <textarea
            value={newItemText}
            onChange={textAreaChange}
            placeholder="Enter new item text"
        />
        <button type="submit" onClick={onClick}></button>
        <MyList
                header="Really epic list component"
                items={items}
        />
        </container>
}

export default Container;