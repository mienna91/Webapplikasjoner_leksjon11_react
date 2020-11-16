import mongoose from 'mongoose';
import { ChoiceSchema } from '../models/choice.js';
import { choiceService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

const Choice = mongoose.model('Choice', ChoiceSchema);

export const get = catchAsyncErrors(async (req, res, next) => {
  const choice = await choiceService.getChoiceById(req.params.id);
  if (!choice) {
    return next(
      new ErrorHandler(`Finner ikke choice med ${req.params.id}`, 404)
    );
  }
  res.status(200).json(choice);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await choiceService.listChoices();

  if (!result) {
    return next(
      new ErrorHandler(`Det er ikke opprettet noen choices enda`, 404)
    );
  }

  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const choice = await choiceService.createChoice(req.body);

  if (!req.body) {
    return next(
      new ErrorHandler(`Kan ikke sende inn tom kropp til database`, 400)
    );
  }
  if (!req.body.description.length) {
    return next(new ErrorHandler(`Svaret må være minst 1 karakter langt`, 400));
  }

  res.status(201).json(choice);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  const choices = await Choice.updateMany(
    { _id: { $in: req.body } },
    { $inc: { votes: 1 } }
  );

  res.status(200).json(choices);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let choice = await choiceService.getChoiceById(req.params.id);

  if (!choice) {
    return next(
      new ErrorHandler(`Finner ikke choice med ${req.params.id}`, 404)
    );
  }

  choice = await choiceService.removeChoice(req.params.id);
  res.status(204).json({});
});
