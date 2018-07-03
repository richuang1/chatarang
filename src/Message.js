import React from 'react'
import MessageList from './MessageList';

const Message= (props)=>{
    return(
        <div className="Message">
            {props.message.user.displayName}:{props.message.body}
        </div>
    )
}

export default Message