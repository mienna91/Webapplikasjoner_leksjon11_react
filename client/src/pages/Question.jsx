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
import { update } from '../utils/choiceService';

const Question = () => {
  const [question, setQuestion] = useState();
  const [choices, setChoices] = useState();
  const [error, setError] = useState(null);
  const [chosenAnswers, setChosenAnswers] = useState([]);

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

  useEffect(() => {
    const fetchChoices = async () => {
      const { data, err2 } = await getChoices('5faa6cae9fb68e56c8d6963d');
      if (err2) {
        setError(err2);
      } else {
        setChoices(data);
      }
    };
    fetchChoices();
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
      {question && <Title key={question._id}>{question.question}</Title>}
      <div>
        {choices &&
          choices.map((choice) => {
            if (choice === null) return;
            return (
              <ChoiceWrapper key={choice._id}>
                <Choice
                  type="checkbox"
                  onChange={() => handleCheckedAnswer(choice)}
                />
                <ChoiceText>{choice.description}</ChoiceText>
              </ChoiceWrapper>
            );
          })}
      </div>
      <div>
        {question && (
          <SubmitButton key={question._id} onClick={handleAnswerVotes}>
            Submit answer
          </SubmitButton>
        )}
      </div>
    </Container>
  );
};

export default Question;
