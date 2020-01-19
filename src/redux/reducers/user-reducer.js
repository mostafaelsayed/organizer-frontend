const userReducer = function({ failTokenStatus = false, user = {} } = {}, action) {
    switch(action.type) {
        case 'LOG_USER_IN' : return {failTokenStatus: false, user}
        case 'LOG_USER_OUT' : return {failTokenStatus: true, user}
        case 'FAIL_TOKEN': return {user, failTokenStatus: action.failTokenStatus}
        
        default: return {user, failTokenStatus};
    }
};

export default userReducer;