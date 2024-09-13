
import PropTypes from "prop-types";

ProductSum.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      pic: PropTypes.string.isRequired,  
    }))
}
export function ProductSum({products}){
    /**Get sum of products */
    const total = products.reduce(
        (accumulate, p) => {return(accumulate+p.price)}, 0);

    return(
    <>
        <h2>Total price: {total}</h2>
    </>
    )
}