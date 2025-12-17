import Productcard from "./productcard";

    const products=[
        {id:1, name: "SMART WATCH", price:5000, image:"./images/smartWatch.jpg", inStock:true, isFeatured:true},
        {id:2, name: "SAMSUNG A12", price:25000, image:"./images/samsungA12.jpg", inStock:true, isFeatured:false},
        {id:3, name: "IPHONE 13 PRO MAX", price:55000, image:"./images/iphone.jpg", inStock:false, isFeatured:true},
        {id:4, name: "BLUETOOTH SPEAKER", price:10000, image:"./images/speaker.jpg", inStock:false, isFeatured:false}
    ]
function Productlist(){
    if(products.length==0){
        return <p>no products available at the moment</p>
    }

return(
    <div className="productList">
        {products.map(product=>(
            <Productcard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            inStock={product.inStock}
            isFeatured={product.isFeatured}
            />
        ))}
    </div>
)
}
export default Productlist