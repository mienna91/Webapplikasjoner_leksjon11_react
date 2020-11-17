import { questionService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const question = await questionService.getQuestionById(req.params.id);
  if (!question) {
    return next(
      new ErrorHandler(`Finner ikke question med ${req.params.id}`, 404)
    );
  }
  res.status(200).json(question);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await questionService.listQuestions();

  if (!result) {
    return next(new ErrorHandler(`Det er ikke opprettet noen polls enda`, 404));
  }

  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const question = await questionService.createQuestion(req.body);

  res.status(201).json(question);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let question = await questionService.getQuestionById(req.params.id);

  if (!question) {
    return next(
      new ErrorHandler(`Finner ikke question med ${req.params.id}`, 404)
    );
  }

  question = await questionService.updateQuestion(req.params.id, req.body);
  res.status(200).json(question);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let question = await questionService.getQuestionById(req.params.id);

  if (!question) {
    return next(
      new ErrorHandler(`Finner ikke question med ${req.params.id}`, 404)
    );
  }

  question = await questionService.removeQuestion(req.params.id);
  res.status(204).json({});
});

export const listChoices = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const choices = await questionService.listQuestionChoices(id);

  res.status(200).json(choices);
});
