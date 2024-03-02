let initialValue = { count: 0 };

function counterReducer(state = initialValue, action) {
    switch (action.type) {
        case "INCREASE":
            return { count: state.count + 1 };
        case "DECREASE":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

export default counterReducer;