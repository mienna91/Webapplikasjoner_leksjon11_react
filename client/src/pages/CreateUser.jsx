import React, { useState, useContext, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, SubmitButton, Input, Title, Label } from '../styles/form';
import { GlobalContext } from '../context/GlobalUserContext';
import { create, get } from '../utils/createUserService';

const CreateUser = ({ history }) => {
  const global = useContext(GlobalContext);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const userId = useRef();

  const createUser = async (data) => {
    await create(data).then((response) => (userId.current = response._id));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(user);
    await createUser(user);
    console.log(userId.current);

    global.updateState(userId.current);

    setUser({
      name: '',
      email: '',
    });

    history.push('/createpoll');
  };

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setUser((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create user</Title>
      <Label htmlFor="name">Name: </Label>
      <Input
        name="name"
        type="text"
        placeholder="Name..."
        autoComplete="off"
        onChange={updateValue}
        value={user.name}
      />
      <Label htmlFor="email">E-mail: </Label>
      <Input
        name="email"
        type="text"
        placeholder="E-mail..."
        autoComplete="off"
        onChange={updateValue}
        value={user.email}
      />

      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default withRouter(CreateUser);
