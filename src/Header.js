import React from 'react';
import {userContext} from './userContext';

const Header = () => {
  const usernameContext = React.useContext(userContext);
  return (
    <header>
      <h1>Hello {usernameContext.user}!</h1>
    </header>
  )
}

export default Header;