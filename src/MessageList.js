import React from 'react'
import Message from './Message';
const MessageList =() => {

  const messages= [
      {
        id:1,
        user: {
            uid: "sdfsfeef3432",
            displayName: "Rich",
            email:"richuang@iu.edu",

        },
        body: "Chatting up a storm"
      },
      {
          id: 2
          user: {
              uid: "sdasdwdasd",
              displayName: "Dana",
              email. "dana@fretless.com",
          },
          body: 'This guy is so annoying. I hate my job.',
      },
  ]
    return(
        
        <div className="MessageList">
         {messages.map(msg =>(
             <Message message={msg} key ={msg.id} />
         ))
        }
      </div>
    )
}

export default MessageList