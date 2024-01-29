import React from 'react';

function MyList(props) {
    const header = props.header;
    const items = props.items.map(item =>
    <li key={items.id.toString()}>
        {item.text}
    </li>);
    return (
        <div>
            <h2>{header}</h2>
            <ol>{items}</ol>
        </div>
            );
}

export default MyList;