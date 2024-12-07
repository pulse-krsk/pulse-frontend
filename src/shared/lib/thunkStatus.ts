import type { Action } from '@reduxjs/toolkit';

const isPending = (action: Action) => action.type.endsWith('pending');

const isFulfilled = (action: Action) => action.type.endsWith('fulfilled');

const isRejected = (action: Action) => action.type.endsWith('rejected');

const isCompleted = (action: Action) => isFulfilled(action) || isRejected(action);

export { isFulfilled, isPending, isRejected, isCompleted };
