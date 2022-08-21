import React from 'react';

import UserSection from './UserSection/UserSection';
import Chats from './Chats/Chats';
// import { SearchContextProvider } from '../../store/search-context';

import classes from './SideSection.module.scss';

function SideSection() {
  return (
    // <SearchContextProvider>
    <div className={classes['side-section']}>
      <UserSection />
      <Chats />
    </div>
    // </SearchContextProvider>
  );
}

export default SideSection;
