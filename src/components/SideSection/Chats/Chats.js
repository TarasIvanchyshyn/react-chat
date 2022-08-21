import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import SearchContext from '../../../store/search-context';
import Avatar from '../UserSection/Avatar/Avatar';
import dateFormater from '../../../helpers/dateFormater';
import compare from '../../../helpers/compare';

import classes from './Chats.module.scss';

function Chats() {
  // const context = useContext(SearchContext);
  const state = useSelector((state) => state);
  const chats = useSelector((state) => state.filtered);
  const [sorted, setSorted] = useState(chats);
  const dispatch = useDispatch();

  useEffect(() => {
    setSorted(chats.sort(compare));
  }, [state, chats]);

  function select(chat) {
    dispatch({ type: 'select-chat', selectedChat: chat });
  }

  return (
    <div className={classes['chats-section']}>
      <h4 className={classes.header}>Chats</h4>
      <div className={classes.chats}>
        {sorted.map((chat) => {
          const user = chat[0];
          const messages = chat[1];
          const lastMessage = messages[messages.length - 1];

          return (
            <div
              key={user.id}
              className={classes.chat}
              onClick={() => select(chat)}
            >
              <div className={classes.avatar}>
                <Avatar img={user.avatar} />
              </div>
              <div className={classes.info}>
                <p>{user.name}</p>
                <p>{lastMessage.message}</p>
              </div>
              <div className={classes.date}>
                <p>{dateFormater(lastMessage.creationDate)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chats;
