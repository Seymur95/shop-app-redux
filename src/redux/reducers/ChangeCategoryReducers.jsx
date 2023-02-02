import * as ActionTypes from './../actions/ActionTypes'
import initialState from './initialState'

export default function changeCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state
    }
}