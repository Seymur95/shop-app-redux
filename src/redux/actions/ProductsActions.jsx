import * as ActionTypes from './ActionTypes'

export const getProductsSuccess = (products) => {
    return { type: ActionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}

export const getProducts = (categoryId) => {
    return function (dispatch) {
        let url = 'http://localhost:3000/products'

        categoryId && (url += '?categoryId=' + categoryId)

        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}