const counter = (state = 0, action) => {
    if (action.type === 'inc') {
        return state + 1
    }
    else if (action.type === 'dec') {
        return state - 1
    }
    return state
}
export default counter;