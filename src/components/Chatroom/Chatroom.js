import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../SideSection/UserSection/Avatar/Avatar';
import dateTimeFormater from '../../helpers/dateTimeFormater';
import { url } from '../../constants';
import notification from '../../assets/notification.mp3';
import sent from '../../assets/sent.mp3';

import classes from './Chatroom.module.scss';

function Chatroom() {
  const [message, setMessage] = useState('');
  const [jokeText, setJokeText] = useState('');
  const lastMessageRef = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const selectedChat = useSelector((state) => state.selectedChat);

  const incomeMsgSound = new Audio(notification);
  const outcomeMsgSound = new Audio(sent);

  const friend = selectedChat[0];
  const messages = selectedChat[1];

  const messageInputHandler = (e) => setMessage(e.target.value);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setMessage('');
  }, [selectedChat]);

  useEffect(scrollToBottom, [state]);

  function scrollToBottom() {
    lastMessageRef.current &&
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  async function getData() {
    let response = await fetch(url);
    let joke = await response.json();
    setJokeText(joke.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch({
      type: 'add-message',
      data: {
        friendId: friend.id,
        userId: '777',
        id: Math.random().toString(),
        message: message
      }
    });
    outcomeMsgSound.play();
    setMessage('');
    setTimeout(() => {
      getData();
      dispatch({
        type: 'add-message',
        data: {
          friendId: friend.id,
          userId: Math.random().toString(),
          id: Math.random().toString(),
          message: jokeText
        }
      });
      incomeMsgSound.play();
    }, 3000);
  }

  function messageRenderer(message) {
    if (message.userId !== '777') {
      return (
        <div
          className={`${classes.message} ${classes['friend-message']}`}
          key={message.id}
        >
          <Avatar img={friend.avatar} />
          <div className={classes.data}>
            <span>{message.message}</span>
            <span>{dateTimeFormater(message.creationDate)}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`${classes.message} ${classes['user-message']}`}
          key={message.id}
        >
          <span>{message.message}</span>
          <span>{dateTimeFormater(message.creationDate)}</span>
        </div>
      );
    }
  }

  return (
    <div className={classes.chatroom}>
      {selectedChat && (
        <>
          <header className={classes.header}>
            <Avatar img={friend.avatar} />
            <h3>{friend.name}</h3>
          </header>
          <div className={classes.messages}>
            {messages.map((msg) => messageRenderer(msg))}
            <div ref={lastMessageRef} />
          </div>
          <form className={classes.footer} onSubmit={submitHandler}>
            <div className={classes.input}>
              <input
                value={message}
                placeholder="Type your message"
                onChange={messageInputHandler}
              ></input>
              <button type="submit">
                <FontAwesomeIcon icon={faLocationArrow} />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Chatroom;
