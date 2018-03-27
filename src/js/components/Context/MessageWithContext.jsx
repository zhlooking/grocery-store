import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }, { color }) => {
  return <button style={{ backgroundColor: color }}>{children}</button>;
};

Button.contextTypes = {
  color: PropTypes.string,
};

const Message = ({ text }) => {
  return <div>{text} <Button>Delete</Button></div>;
};

class MessageList extends React.Component {
  getChildContext() {
    return { color: 'green' };
  }

  render() {
    const { messages } = this.props;
    const children = messages.map(message => <Message text={message} />);

    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
};

const MessageInfo = () => <MessageList messages={['foo', 'bar', 'baz']} />;

export default MessageInfo;
