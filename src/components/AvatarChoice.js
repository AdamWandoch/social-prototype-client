import React from 'react';
import avatars from '../img/avatars/avatars';
import { Avatar } from './Avatar';

export const AvatarChoice = ({ showChoice, pickAvatar }) => {
  return (
    // implement avatar selection
    <div className='avatars-modal'>
      <h1 className='text-centered margin-top-bottom'>Choose your avatar</h1>
      <div className='avatars' onClick={() => showChoice(false)}>
        {avatars
          .filter((a) => a.name !== 'choose')
          .map((avatar, index) => (
            <Avatar key={index} index={index} pickAvatar={pickAvatar} />
          ))}
      </div>
    </div>
  );
};
