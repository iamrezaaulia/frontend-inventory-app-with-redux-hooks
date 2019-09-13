import axios from 'axios'
const token = localStorage.getItem('auth')

export const getProducts = query => {
	const { sort, sortBy, page, limit, search } = query;
    return {
        type: 'GET_PRODUCTS',
        payload : axios.get(`/products?sort=${sort}&sortBy=${sortBy}&page=${page}&limit=${limit}&search=${search}`)
    }
}

export const getProductById = id => {
    return {
        type: 'GET_PRODUCT_BY_ID',
        payload : axios.get(`/products/${id}`)
    }
}

export const createProduct = data => {
	return {
		type: 'CREATE_PRODUCT',
		payload: axios.post(`/products`, data, {
			headers: { 
					token: 'bearer ' + token
				}
		})
	}
}

export const deleteProduct = id => {
	return {
		type: 'DELETE_PRODUCT',
		payload: axios.delete(`/products/delete/${id}`, {
			headers: { 
					token: 'bearer ' + token
				}
		})
	}
}

export const updateProduct = (id, data) => {
	return {
		type: 'UPDATE_PRODUCT',
		payload: axios.put(`/products/update/${id}`, data, {
			headers: { 
					token: 'bearer ' + token
				}
		})
	}
}


