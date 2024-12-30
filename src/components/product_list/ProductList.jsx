import { useState, useEffect } from "react";
import Product from "../product_item/ProductItem"
const ProductList = () => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        fetch("./data.json").then(response => response.json()).then(data => setProductList(data)).catch(error => console.log(`Error ${error}`))
    })
    if (!productList) return <p> Loading... </p>
    let getImage = (images) => {
        let viewPortWidth = document.documentElement.clientWidth
        if (viewPortWidth > 1024) return images['desktop'] ?? ''
        if (viewPortWidth >= 768) return images['tablet'] ?? ''
        return images['mobile'] ?? ''
    }
    return (
        <div className="w-[calc(70%-1rem)] tb:w-full mb:w-full">
            <h2 className="text-1 mb-8">Desserts</h2>
            <div className="w-full flex flex-wrap items-baseline justify-between gap-6 gap-y-8">
                {productList.map((product, index) => <Product key={index} id={index} image={getImage(product.image)} category={product.category} price={product.price} thumbnail={product.image?.thumbnail ?? ''} name={product.name}></Product>)}
            </div>
        </div>
    )
}
export default ProductList