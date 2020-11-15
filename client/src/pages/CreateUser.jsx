import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../context/GlobalUserContext';
import { Form, SubmitButton, Input, Title, Label } from '../styles/form';
import { create } from '../utils/createUserService';

const CreateUser = ({ history }) => {
  const [state, setState] = useContext(Context);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const createUser = async (data) => {
    await create(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(user);
    createUser(user);
    setState(user);
    console.log(state);

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
