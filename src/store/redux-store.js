import { createStore } from 'redux';
import { mockedChats } from '../constants';

const initialState = { chats: mockedChats, selectedChat: '', filtered: [] };

const storeReducer = (state = initialState, action) => {
  if (action.type === 'search') {
    const updated = state.chats.filter((chat) => {
      return chat[0].name
        .toLowerCase()
        .includes(action.searchValue.toLowerCase());
    });
    return {
      chats: state.chats,
      selectedChat: state.selectedChat,
      filtered: updated
    };
  }

  if (action.type === 'select-chat') {
    return {
      chats: state.chats,
      selectedChat: action.selectedChat,
      filtered: state.filtered
    };
  }

  if (action.type === 'add-message') {
    state.chats
      .find((el) => el[0].id === action.data.friendId)[1]
      .push({
        userId: action.data.userId,
        id: action.data.id,
        message: action.data.message,
        creationDate: new Date()
      });

    return {
      chats: state.chats,
      selectedChat: state.selectedChat,
      filtered: state.filtered
    };
  }

  return state;
};
const store = createStore(storeReducer);

export default store;
