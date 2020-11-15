import Choice from '../models/choice.js';

export const getChoiceById = async (id) => Choice.findById(id);

export const listChoices = async () => Choice.find();

export const createChoice = async (data) => Choice.create(data);

export const updateChoice = async (id, data) =>
  Choice.findOneAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeChoice = async (id) => {
  const poll = await Choice.findById(id);
  poll.remove();
};
