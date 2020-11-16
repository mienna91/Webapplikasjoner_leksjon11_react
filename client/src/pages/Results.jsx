import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Title,
  ChoiceWrapper,
  Choice,
  ChoiceText,
} from '../styles/question';
import { get, getChoices } from '../utils/questionService';
import { update } from '../utils/choiceService';
import { GlobalContext } from '../context/GlobalUserContext';

const Results = () => {
  const [question, setQuestion] = useState();
  const [error, setError] = useState(null);
  const question2 = useContext(GlobalContext);

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data, err } = await getChoices(question2.questionState);
      if (err) {
        setError(err);
      } else {
        setQuestion(data);
      }
    };

    fetchQuestion();
  }, []);

  return (
    <Container>
      {error && <p>error</p>}
      {question && <Title>Results: {question.question} </Title>}
      <div>
        {question &&
          question.map((q) => {
            if (question === null) return error;
            return (
              <div key={question.votes}>
                <ChoiceText key={question._id}>
                  {q.description}: {q.votes}
                </ChoiceText>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default Results;
