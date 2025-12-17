function Productcard({id, name, price, image, inStock, isFeatured}){
    return(
        <div className="productCard">
            {image && (<img className="images"src={image} alt={name}/>)}
            <h2>{name}</h2>
            <h2>{price}</h2>
            {inStock? " ": (<p className="outofStock">OUT OF STOCK</p>)}
            {isFeatured?(<p className="featured">FEATURED</p>): " "}
            {price>20000? (<p className="premium">PREMIUM</p>): " "}
        </div>
    )
}
export default Productcard