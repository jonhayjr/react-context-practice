import React from 'react';

const userContext = React.createContext();

const {Provider, Consumer} = userContext;

const UserContextProvider = (props) => {
  const [user, setUser] = React.useState('bobby1579');

  const updateUser = (newUser) => {
    setUser(newUser);
  }

  return (
    <Provider value={{user, updateUser}}>
      {props.children}
    </Provider>
  )
}

export {UserContextProvider, Consumer as UserContextConsumer, userContext}