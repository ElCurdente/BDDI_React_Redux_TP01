import { showStar } from './createSlice';

function primeNumbers(nbr) {
    console.log(nbr);
    for (let i = 2; i < nbr; i++) {
        if (nbr % i === 0) return false;
        return nbr > 1;
    }
}

export default store => next => action => {

    const state = store.getState();
    // console.log("before", state.counter.count);

    const returnAction = next(action);
    // console.log("after", store.getState().counter.count);

    if (action.type !== 'counter/showStar') {
        let primeValue = store.getState().counter.count - state.counter.count;
        console.log("primeValue", primeValue);

        if (primeNumbers(primeValue) !== state.counter.showStar) {
            store.dispatch(showStar(primeNumbers(primeValue)));
        }
    }
    return returnAction;
}