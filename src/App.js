import React from 'react';

import SideSection from './components/SideSection/SideSection';
import Chatroom from './components/Chatroom/Chatroom';

import classes from './App.module.scss';
// import { mockedChats } from './constants';

function App() {
  // useEffect(() => {
  //   localStorage.setItem(
  //     'initialState',
  //     JSON.stringify({ chats: mockedChats, selectedChat: '' })
  //   );
  // }, []);

  // const [jokeText, setJokeText] = useState('');

  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   let response = await fetch(url);
  //   let joke = await response.json();
  //   setJokeText(joke.value);
  //   // console.log(joke);
  // }

  return (
    <div className={classes.app}>
      <SideSection />
      <Chatroom />
      <div className={classes.bar}></div>
    </div>
  );
}

export default App;
