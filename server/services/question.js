import Question from '../models/question.js';
import Choice from '../models/choice.js';

export const getQuestionById = async (id) => Question.findById(id);

export const listQuestions = async () =>
  Question.find().populate('user', 'name');

export const createQuestion = async (data) => Question.create(data);

export const updateQuestion = async (id, data) =>
  Question.findOneAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeQuestion = async (id) => {
  const question = await Question.findById(id);
  question.remove();
};

export const listQuestionChoices = async (id) => {
  if (id) {
    const choices = await Choice.find({ question: id }).populate(
      'question',
      'question'
    );
    return choices;
  }
};
