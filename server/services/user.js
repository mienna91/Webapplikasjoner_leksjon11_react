import User from '../models/user.js';
import Question from '../models/question.js';

export const getUserById = async (id) => User.findById(id);

export const listUsers = async () => User.find();

export const createUser = async (data) => User.create(data);

export const updateUser = async (id, data) =>
  User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeUser = async (id) => {
  const user = await User.findById(id);
  user.remove();
};

export const getUsersQuestions = async (id) => {
  if (id) {
    const questions = await Question.find({ user: id }).populate(
      'user',
      'email'
    );
    return questions;
  }
};
