import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// import SearchContext from '../../../../store/search-context';
// import { mockedChats } from '../../../../constants';

import classes from './Search.module.scss';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  // const context = useRef(useContext(SearchContext));
  // const chats = useSelector((state) => state.chats);

  const inputChangeHandler = (e) => setSearchValue(e.target.value);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const filtered = mockedChats.filter((chat) => {
  //       return chat[0].name.toLowerCase().includes(searchValue.toLowerCase());
  //     });
  //     context.current.setChats(filtered);
  //   }, 500);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [searchValue]);
  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch({ type: 'search', searchValue: searchValue });
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchValue, dispatch]);

  return (
    <div className={classes.search}>
      <input
        type="search"
        placeholder="Search or start new chat"
        onChange={inputChangeHandler}
      ></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
}

export default Search;
