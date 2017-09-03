import { AsyncSuffixes } from '../constants';

export const getAsyncActionTypes =
  actionType => Object.keys(AsyncSuffixes).reduce((acc, suffixKey) => {
    const asyncAction = `${actionType}${AsyncSuffixes[suffixKey]}`;
    acc[asyncAction] = asyncAction;

    return acc;
  }, {});

export const trimSuffix = (actionType, suffix) => actionType.slice(0, -suffix.length);
