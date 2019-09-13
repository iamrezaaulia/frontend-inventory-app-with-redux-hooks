const initState = {
    errMessage:'',
    message:'',
    isLogged: false,
    isLoading: false,
    isRejected: false,
    isFulfilled: false
};

const users = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_PENDING':
            return{...state, isLoading:true, isRejected:false, isFulfilled:false}
        case 'LOGIN_REJECTED':
            return{...state, isLoading:false, isRejected:true, errMessage: action.payload.data.message}
        case 'LOGIN_FULFILLED':
            return{...state, isLoading:false, isFulfilled:true}


        case 'REGISTER_PENDING':
            return{...state, isLoading:true, isRejected:false, isFulfilled:false}
        case 'REGISTER_REJECTED':
            return{...state, isLoading:false, isRejected:true, errMessage:action.payload.response.data.message}
        case 'REGISTER_FULFILLED':
            return{...state, isLoading:false, isFulfilled:true}

            
        default:
            return state
    }
}

export default users