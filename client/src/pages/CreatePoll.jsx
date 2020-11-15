import React, { useState, useContext } from 'react';
import { Form, SubmitButton, Input, Title, Label } from '../styles/form';
import { Context } from '../context/GlobalUserContext';

const CreatePoll = () => {
  const [state, setState] = useContext(Context);
  const [qState, setQState] = useState();
  return (
    <Form>
      <Title>Create poll</Title>
      <Label htmlFor="question">Specify question</Label>
      <Input name="question" type="text" placeholder="Insert question" />
      <Label htmlFor="choice1">First choice</Label>
      <Input name="choice1" type="text" placeholder="Insert Choice" />
      <Label htmlFor="choice2">Second choice</Label>
      <Input name="choice2" type="text" placeholder="Insert Choice" />
      <Label htmlFor="choice3">Third choice</Label>
      <Input name="choice3" type="text" placeholder="Insert Choice" />
      <Label htmlFor="choice4">Fourth choice</Label>
      <Input name="choice4" type="text" placeholder="Insert Choice" />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export default CreatePoll;
