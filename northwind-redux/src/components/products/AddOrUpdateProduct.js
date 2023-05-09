import React, { useEffect, useState } from "react";
// setState->useState , componentDidMount yerine -> useEffect (lifecycle için)
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions"
import { saveProduct } from "../../redux/actions/productActions"
import ProductDetail from "./ProductDetail";
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    navigate,
    ...props
}) {
    //bazı değerleri sabit getirmek istiyoruz ürün eklemek istediğimizde
    const [product, setProduct] = useState({ ...props.product }) // setState yerine hooks'da bu syntax kullanılır
    // kullanıcı direkt link ile gittiyse useEffect kullanılır
    useEffect(() => {
        if (categories.length === 0) { // link ile gelmişsse length === 0 dır
            getCategories()
        }
        setProduct({ ...props.product })
    }, [props.product])

    function handleChange(event) {
        const { name, value } = event.target
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))
    }

    function handleSave(event) {
        event.preventDefault() // reflesh olmasını engelledik
        saveProduct(product).then(() => {
            navigate.push("/")
        })
    }

    return (
        <ProductDetail
            product={product}
            categories={categories}
            onSave={handleSave}
            onChange={handleChange}
        />
    )

}

export function getProductById(products, productId) {
    let product = products.find(product => product.id === productId) || null
    return product
}


function mapStateToProps(state,ownProps) {
    //const productId = ownProps.match.params.productId
    const product = getProductById(state.productListReducer, state.product.id)
        
    return {
        product: product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapDispatchToProps,mapStateToProps)(AddOrUpdateProduct)