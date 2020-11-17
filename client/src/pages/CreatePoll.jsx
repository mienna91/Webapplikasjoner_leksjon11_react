import React, { useState, useContext, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, SubmitButton, Input, Title, Label } from '../styles/form';
import { GlobalContext } from '../context/GlobalUserContext';
import { get } from '../utils/createUserService';
import { create } from '../utils/questionService';
import { create as createChoice } from '../utils/choiceService';

const CreatePoll = ({ history }) => {
  const userId = useContext(GlobalContext);
  const [questionState, setQuestionState] = useState({
    question: '',
    user: userId.state,
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

  /* const getUser = async (id) => {
    await get(id).then((response) => {
      console.log(response.data);
      loggedInName.current = response.data.name;
    });
  }; */

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('USERID:', userId.state);
    await createQuestion(questionState)
      .then((response) => {
        console.log(response.data._id);
        questionId.current = response.data.id;
      })
      .then(async () => {
        await createChoices(choices);
      });

    console.log(choices);
    console.log(questionId);

    userId.updateQuestionState(questionId.current);
    console.log(questionId.current);

    history.push(`/question/${questionId.current}`);
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
      user: userId.state,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {!userId.state ? (
        <Title>Logget inn som: guest</Title>
      ) : (
        <Title>Logget inn som: {userId.state}</Title>
      )}
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
