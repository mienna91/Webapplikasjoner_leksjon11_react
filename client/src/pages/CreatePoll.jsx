import React, { useState, useContext, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, SubmitButton, Input, Title, Label } from '../styles/form';
import { Context } from '../context/GlobalUserContext';
import { create } from '../utils/questionService';
import { create as createChoice } from '../utils/choiceService';

const CreatePoll = ({history}) => {
  const [state, setState] = useContext(Context);
  const [questionState, setQuestionState] = useState({
    question: '',
    user: '5faa6844ea4e143a20c9b361',
  });

  const [choices, setChoices] = useState({
    choice1: '',
    choice2: '',
    choice3: '',
    choice4: '',
  });
  const questionId = useRef();

  const createQuestion = async (data) => {
    const question = {
      question: data.question,
      user: data.user,
    };

    const result = await create(question);
    return result;
  };

  const createChoices = async (data) => {
    const choiceList = [data.choice1, data.choice2, data.choice3, data.choice4];

    const data1 = {
      description: choiceList[0],
      question: questionId.current,
    };

    const data2 = {
      description: choiceList[1],
      question: questionId.current,
    };

    const data3 = {
      description: choiceList[2],
      question: questionId.current,
    };

    const data4 = {
      description: choiceList[3],
      question: questionId.current,
    };

    await createChoice(data1);
    await createChoice(data2);
    await createChoice(data3);
    await createChoice(data4);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(questionState);
    createQuestion(questionState);

    console.log(choices);

    console.log(questionId);

    history.push('/question');
  };

  const updateChoiceValue = (event) => {
    const inputChoiceValue = { [event.target.name]: event.target.value };
    setChoices((prev) => ({
      ...prev,
      ...inputChoiceValue,
    }));
  };

  const handleQuestionChanges = (event) => {
    setQuestionState({
      question: event.target.value,
      user: '5faa6844ea4e143a20c9b361',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create poll</Title>
      <Label htmlFor="question">Specify question</Label>
      <Input
        name="question"
        type="text"
        placeholder="Insert question"
        onChange={handleQuestionChanges}
        ChoiceValue={questionState.question}
      />
      <Label htmlFor="choice1">First choice</Label>
      <Input
        name="choice1"
        type="text"
        placeholder="Insert Choice"
        onChange={updateChoiceValue}
        ChoiceValue={choices.choice1}
      />
      <Label htmlFor="choice2">Second choice</Label>
      <Input
        name="choice2"
        type="text"
        placeholder="Insert Choice"
        onChange={updateChoiceValue}
        ChoiceValue={choices.choice2}
      />
      <Label htmlFor="choice3">Third choice</Label>
      <Input
        name="choice3"
        type="text"
        placeholder="Insert Choice"
        onChange={updateChoiceValue}
        ChoiceValue={choices.choice3}
      />
      <Label htmlFor="choice4">Fourth choice</Label>
      <Input
        name="choice4"
        type="text"
        placeholder="Insert Choice"
        onChange={updateChoiceValue}
        ChoiceValue={choices.choice4}
      />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export default withRouter(CreatePoll);
