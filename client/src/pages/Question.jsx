import React from 'react';
import {
  Container,
  Title,
  ChoiceWrapper,
  Choice,
  ChoiceText,
} from '../styles/question';
import { SubmitButton } from '../styles/form';

const Question = () => (
  <Container>
    <Title>Question</Title>
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

export default Question;
