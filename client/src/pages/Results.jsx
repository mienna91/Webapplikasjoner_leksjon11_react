import React, { useEffect, useState, useContext } from 'react';
import { Container, Title, ChoiceText } from '../styles/question';
import { getChoices } from '../utils/questionService';
import { GlobalContext } from '../context/GlobalUserContext';

const Results = () => {
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);
  const question2 = useContext(GlobalContext);

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data, err } = await getChoices(question2.questionState);
      console.log(data.success);
      if (data.success === false) {
        setError(data.message);
        console.log('DEN SATT ERROR');
      } else {
        setQuestion(data);
      }
    };

    fetchQuestion();
  }, []);

  return (
    <Container>
      {error && <Title>{error}</Title>}
      {question && <Title>Results: {question.question} </Title>}
      <div>
        {question !== null ? (
          question.map((q) => {
            if (question === null) return error;
            return (
              <div key={question.votes}>
                <ChoiceText key={question._id}>
                  {q.description}: {q.votes}
                </ChoiceText>
              </div>
            );
          })
        ) : (
          <Title>Ingen resultater å vise foreløpig</Title>
        )}
      </div>
    </Container>
  );
};

export default Results;
