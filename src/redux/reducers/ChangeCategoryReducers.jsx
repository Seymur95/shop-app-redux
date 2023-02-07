import * as ActionTypes from './../actions/ActionTypes'
import initialState from './initialState'

export default function ChangeCategoryReducer(state = initialState.currentCategory, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state
    }
}