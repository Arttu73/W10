import MyList from './MyList'
import React, { useState } from 'react';


function MyContainer(items) {
    
    const [text, setText] = useState('')

    const onClick = (e) => {
        e.preventDevault();
        const newItem = {
            id: (items.length + 1).toString(),
            text: text.trim()
        };
        setItems([...items, newItem]);
        setText("");
    };


    return (
        <div>
            <MyList
                    header="Really epic list component"
                    items={items}
            />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter new item text"
            />
            <button type="submit" onClick={onClick}></button>
        </div>
    );
}

export default MyContainer;