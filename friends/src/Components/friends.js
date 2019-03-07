import React from 'react';

const Friend = ({friend})=>{return(

    <div>
        <p>{friend.id}</p>
        <h3>{friend.name} ({friend.age})</h3>
        <p>
            <a href="/">{friend.email}</a>
        </p>
    </div>
    
)};
export default Friend;