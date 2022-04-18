import React from 'react';
import {userContext} from './userContext';

const Form = () => {
  const [formData, setFormData] = React.useState({username: ''});

  const usernameContext = React.useContext(userContext)

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(prevFormData => ({...prevFormData, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    usernameContext.updateUser(formData.username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
      name="username"
      type="text"
      value={formData.username}
      onChange={handleChange}
      />
      <button type="submit">Update Username</button>
    </form>
  )
}

export default Form;