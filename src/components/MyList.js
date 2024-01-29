import React from 'react';

function MyList({ header, items, updateItem }) {
    const header1 = header;
    const itemsList = items.map(item =>
    <li 
        key={item.id.toString()} 
        style={{ textDecoration: item.clicked ? 'line-through' : 'none' }}
        onClick={() => updateItem(item.id)}
    >
        {item.text}
    </li>);
    return (
        <div>
            <h1>{header1}</h1>
            <ol>{itemsList}</ol>
        </div>
            );
}

export default MyList;