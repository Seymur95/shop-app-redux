import * as ActionTypes from '../actions/ActionTypes'
import initialState from './initialState'

export const CategorylistReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case ActionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
        default:
            return state
    }
}