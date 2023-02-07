import * as ActionTypes from './ActionTypes'

export function changeCategory(category) {
    return { type: ActionTypes.CHANGE_CATEGORY, payload: category }
}

export function getCategoriesSuccess(categories) {
    return { type: ActionTypes.GET_CATEGORIES_SUCCESS, payload: categories }
}

export function getCategories() {
    return function (dispatch) {
        const url = 'http://localhost:3000/categories'
        fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getCategoriesSuccess(result)))
    }
}