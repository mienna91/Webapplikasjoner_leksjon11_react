import { userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async(req, res, next) => {
    const user = await userService.getUserById(req.params.id)
    if(!user) {
        return next(
            new ErrorHandler(`Finner ikke bruker med ${req.params.id}`, 404)
        )
    }
    res.status(200).json(user);
});

export const list = catchAsyncErrors(async(req, res, next) => {
    const result = await userService.listUsers();
    if(!result) {
        return next(
            new ErrorHandler(`Det er foreløpig ikke opprettet noen brukere`, 404)
        )
    }
    res.status(200).json(result);
});

export const create = catchAsyncErrors(async(req, res, next) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user)
});

export const update = catchAsyncErrors(async(req, res, next) => {
    let user = await userService.getUserById(req.params.id);

    if(!user) {
        return next(
            new ErrorHandler(`Finner ikke bruker med ${req.params.id}`, 404)
        )
    }

    user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(user)
});

export const remove = catchAsyncErrors(async(req, res, next) => {
    let user = await userService.getUserById(req.params.id);

    if(!user) {
        return next(
            new ErrorHandler(`Finner ikke bruker med ${req.params.id}`, 404)
        )
    }

    user = await userService.removeUser(req.params.id);
    res.status(204).json({});
});