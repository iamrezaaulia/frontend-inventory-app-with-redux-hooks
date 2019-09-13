const initState = {
    products: [],
    errMessage: '',
    message: '',
    isLoading: '',
    isRejected: '',
    isFulfilled: ''
}

const product = (state = initState, action) => {
    switch(action.type){
        case 'GET_PRODUCTS_PENDING':
            return {...state, isLoading:true, isRejected:false, isFulfilled:false}
        case 'GET_PRODUCTS_REJECTED':
            return {...state, isLoading:false, isRejected:true, errMessage: action.payload.data.message}
        case 'GET_PRODUCTS_FULFILLED':
            return{...state, isLoading: false, isFulfilled: true, products: action.payload.data.data}


        case 'GET_PRODUCT_BY_ID_PENDING':
            return{...state, isLoading:true, isRejected:false, isFulfilled:false}
        case 'GET_PRODUCT_BY_ID_REJECTED':
            return{...state, isLoading:false, isRejected:true, errMessage: action.payload.data.message}
        case 'GET_PRODUCT_BY_ID_FULFILLED':
            return{...state, isLoading: false, isFulfilled: true, products: action.payload.data.data[0]}

        
        case 'CREATE_PRODUCT_PENDING':
            return{...state, isLoading:true, isRejected:false, isFulfilled:false}
        case 'CREATE_PRODUCT_REJECTED':
            return{...state, isLoading:false, isRejected:true, errMessage:action.payload.data.message}
        case 'CREATE_PRODUCT_FULFILLED':
            return{...state, isLoading:false, isRejected:false, products:action.payload.data.data}

        
        case 'DELETE_PRODUCT_PENDING':
            return{...state, isLoading:true, isRejected:false, isFulfilled:false}
        case 'DELETE_PRODUCT_REJECTED':
            return{...state, isLoading:false, isRejected:true, errMessage:action.payload.data.message}
        case 'DELETE_PRODUCT_FULFILLED':
            return{...state, isLoading:false, isRejected:false}

        
        case 'UPDATE_PRODUCT_PENDING':
            return{...state, isLoading:true, isRejected:false, isFulfilled:false}
        case 'UPDATE_PRODUCT_REJECT':
            return{...state, isLoading:false, isRejected:true, errMessage:action.payload.data.message}
        case 'UPDATE_PRODUCT_FULFILLED':
            return{...state, isLoading:false, isFulfilled:true}
        

        case 'SEND_QUERY':
            return {...state, query: action.payload}

            
        default:
            return state
    }
}

export default product
