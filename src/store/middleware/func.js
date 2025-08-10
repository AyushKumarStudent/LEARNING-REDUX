// It's a thunk middleware

export const func = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    return next(action);
};