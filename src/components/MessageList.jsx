import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const response = await axios.get('https://aj-pager-df2db-default-rtdb.asia-southeast1.firebasedatabase.app/message.json');
    console.log(response);
    if (response.data) {
      let messageList = [];
      for (let messageId in response.data) {
        messageList.push(response.data[messageId]);
      }
      console.log(messageList);
      messageList.reverse();
      let messageListDisplay = messageList.slice(0, 5);
      setMessages(messageListDisplay);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className='message-container'>
      {messages.length > 0 && messages.map((message, index) => {
        return (
          <div key={index} className="message-card"> {/* Add key prop here */}
            <div className='user-name'>{message.name}</div>
            <div className="user-message">{message.message}</div>
          </div>
        );
      })}
    </div>
  );
};
export default MessageList; 