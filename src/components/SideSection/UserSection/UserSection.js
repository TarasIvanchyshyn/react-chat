import React from 'react';

import Avatar from './Avatar/Avatar';
import Search from './Search/Search';

import classes from './UserSection.module.scss';

function UserSection() {
  return (
    <div className={classes['user-section']}>
      <div className={classes.user}>
        <Avatar />
      </div>
      <Search />
    </div>
  );
}

export default UserSection;
