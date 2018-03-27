import React from 'react';


const Button = ({ color, children }) => {
  return <button style={{ background: color }}>{children}</button>;
};

const Message = ({ text, color }) => {
  return <div>{text}<Button color={color}>Delete</Button></div>;
};

const MessageList = ({ messages }) => {
  const color = 'purple';
  const children = messages.map((msg) => {
    return <Message key={msg} text={msg} color={color} />;
  });
  return <div>{children}</div>;
};

const MessageInfo = () => <MessageList messages={['foo', 'bar', 'baz']} />;

export default MessageInfo;
