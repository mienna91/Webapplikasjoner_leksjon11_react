import { choiceService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

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

  res.status(201).json(choice);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let choice = await choiceService.getChoiceById(req.params.id);

  if (!choice) {
    return next(
      new ErrorHandler(`Finner ikke choice med ${req.params.id}`, 404)
    );
  }

  choice = await choiceService.updateChoice(req.params.id, req.body);
  res.status(200).json(choice);
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
