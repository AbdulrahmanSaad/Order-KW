import {GET} from './restApis';

const getBanner =(options)=>{
    GET('sliders', options)
}

const getProducts =(options)=>{
    GET('products', options)
}

const getOffers =(options)=>{
    GET('offers', options)
}

const getRecipes =(options)=>{
    GET('recipes', options)
}

const getSimilarProducts =(options, id)=>{
    GET(`similar-products/${id}`, options)
}

const getProduct =(options, id)=>{
    GET(`product/${id}`, options)
}

const getCategories =(options)=>{
    GET(`categories`, options)
}

const getCategoryProducts =(options, id)=>{
    GET(`category-products/${id}`, options)
}

const getSubCategories =(options, id)=>{
    GET(`subcategories/${id}`, options)
}

export {getBanner, getProducts, getOffers, getRecipes, 
        getSimilarProducts, getProduct, getCategories, 
        getCategoryProducts, getSubCategories};