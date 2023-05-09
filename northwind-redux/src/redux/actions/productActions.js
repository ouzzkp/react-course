import * as actionTypes from './actionTypes';

export function getProductSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}

export function createProductSuccess(product) {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}

export function updateProductSsuccess(product) {
    return { type: actionTypes.UPDDATE_PRODUCT_SUCCESS, payload: product }
}
// update -> put , ekleme -> post
export function saveProductApi(product) {
    return fetch("http://localhost:3000/products/" + (product.id || ""), {
        method: product.id ? "PUT" : "POST",
        body: JSON.stringify(product), // elimizde json var string yapıyruz
        /*  headers: {"content-type":"application/json"} */
    }).then(handleResponse).catch(handleError)
    //id var ise güncelleme var, id yoksa yeni ürün ekliyor.
} //responslar string döner

export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product).then(savedProduct => {
            product.id ? dispatch(updateProductSsuccess(savedProduct)) : dispatch(createProductSuccess(savedProduct))
        }).catch(error=>{throw error})
    }
}

export async function handleResponse(response){
    if(response.ok){
        return response.json()
    }
    const error = await response.text()
    throw new Error(error)
}

export function handleError(error){
    console.error("Bir hata oluştu")
    throw error
}

export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getProductSuccess(result)));
    }
}