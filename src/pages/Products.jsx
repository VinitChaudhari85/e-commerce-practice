import useFetch from "../hooks/useFetch"

export default function Products() {

    const { data : products, loading, error } = useFetch('http://localhost:3001/products');


    return <div>
        This is the products page.
        { products && products.map((product)=>{ return <div key={product.id} >{product.title}</div>})}
    </div>
};
