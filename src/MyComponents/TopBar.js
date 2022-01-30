import React from 'react';

import SettingIcon from '../MyIcons/setting.svg';
import NoticationIcon from '../MyIcons/notification.svg';

export default function TopBar() {
  return (
      <div className="container w-full absolute z-30 top-0 left-0 p-4 flex justify-end">
          <img className='mr-3' src={NoticationIcon} alt="notification icon" />
          <img src={SettingIcon} alt="setting icon" />
      </div>
  
    );
}
