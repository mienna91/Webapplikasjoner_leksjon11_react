import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  ChoiceWrapper,
  Choice,
  ChoiceText,
} from '../styles/question';
import { get, getChoices } from '../utils/questionService';
import { update } from '../utils/choiceService';

const Results = () => {
  const [question, setQuestion] = useState();
  const [error, setError] = useState(null);
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data, err } = await get('5faa6cae9fb68e56c8d6963d');
      if (err) {
        setError(err);
      } else {
        setQuestion(data);
      }
    };

    fetchQuestion();
  }, []);

  const removeAnswer = (answerToBeRemoved) => {
    const removed = chosenAnswers.filter(
      (answer) => answer !== answerToBeRemoved
    );
    setChosenAnswers([...removed]);
  };

  const handleCheckedAnswer = (newestChecked) => {
    // eslint-disable-next-line array-callback-return
    chosenAnswers.map(
      (existingCheckedAnswer) => {
        if (newestChecked === existingCheckedAnswer) {
          removeAnswer(newestChecked);
        }
      },
      setChosenAnswers((prev) => [newestChecked, ...prev])
    );
  };

  const handleAnswerVotes = (e) => {
    console.log(chosenAnswers);
    const updateVotes = async () => {
      chosenAnswers.map((ans) => {
        update(e.target.id, ans);
      });
    };
    updateVotes();
    chosenAnswers.map((ans) => removeAnswer(ans));
  };

  return (
    <Container>
      <Title>Results: </Title>
      <div>
        {question &&
          question.map((q) => {
            if (question === null) return;
            return (
              <div>
                <ChoiceText>{q.description}</ChoiceText>
                <ChoiceText>{q.votes}</ChoiceText>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default Results;
