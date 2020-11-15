import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  ChoiceWrapper,
  Choice,
  ChoiceText,
} from '../styles/question';
import { SubmitButton } from '../styles/form';
import { get, getChoices } from '../utils/questionService';

const Question = () => {
  const [question, setQuestion] = useState();
  const [choices, setChoices] = useState();
  const [error, setError] = useState(null);
  const [chosenAnswers, setChosenAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data, error } = await get('5faa6cae9fb68e56c8d6963d');
      if (error) {
        setError(error);
      } else {
        setQuestion(data);
      }
    };
    const fetchChoices = async () => {
      const { data, error } = await getChoices('5faa6cae9fb68e56c8d6963d');
      if (error) {
        setError(error);
      } else {
        setChoices(data);
      }
    };
    fetchQuestion();
    fetchChoices();
  }, []);

  return (
    <Container>
    {choices && choices.map((choice) => )}
      {question && <Title key={question._id}>{question.question}</Title>}
      <ChoiceWrapper>
        <Choice type="checkbox" />
        <ChoiceText>Answer</ChoiceText>
      </ChoiceWrapper>
      <ChoiceWrapper>
        <Choice type="checkbox" />
        <ChoiceText>Answer</ChoiceText>
      </ChoiceWrapper>
      <ChoiceWrapper>
        <Choice type="checkbox" />
        <ChoiceText>Answer</ChoiceText>
      </ChoiceWrapper>
      <ChoiceWrapper>
        <Choice type="checkbox" />
        <ChoiceText>Answer</ChoiceText>
      </ChoiceWrapper>
      <SubmitButton>Submit answer</SubmitButton>
    </Container>
  );
};

export default Question;
