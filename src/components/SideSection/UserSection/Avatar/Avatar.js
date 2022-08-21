import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

import avatar from '../../../../assets/avatar.png';

import classes from './Avatar.module.scss';

function Avatar(props) {
  return (
    <div className={classes.avatar}>
      <img src={props.img || avatar} alt="avatar"></img>
      <FontAwesomeIcon icon={faCircleCheck} />
    </div>
  );
}

export default Avatar;
