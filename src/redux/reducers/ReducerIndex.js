import { combineReducers } from 'redux'

import products from './ProductsReducer'
import users from './UsersReducer'

const rootReducer = combineReducers({
    users,
    products
})

export default rootReducer