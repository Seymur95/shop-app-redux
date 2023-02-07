import * as ActionTypes from '../actions/ActionTypes'
import initialState from './initialState'

export default function ProductlistReducer(state = initialState.products, action) {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
        default:
            return state
    }
}