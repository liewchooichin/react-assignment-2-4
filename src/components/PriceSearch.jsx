import PropTypes from "prop-types";
import { ProductList } from "./ProductList";


export function filterPrice (products, priceTerm){
    /**If priceTerm is empty or 0, set to max value */
    priceTerm = (priceTerm>0) ? priceTerm : 100;
    
    return products.filter((p) =>
        (p.price <= priceTerm)
    )
}

PriceSearch.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      pic: PropTypes.string.isRequired,  
    })),
    label: PropTypes.string.isRequired,
    priceTerm: PropTypes.number.isRequired,
    handleSearchPriceChange: PropTypes.func.isRequired
}
export function PriceSearch({products, label,
    priceTerm, handleSearchPriceChange
}){

    const results = filterPrice(products, priceTerm);

    return(
    <>
        <div>
            <label htmlFor="searchPrice">{label}</label>
            <input
                id="searchPrice"
                name="searchPrice"
                type="number"
                value={priceTerm}
                onChange={(e) => handleSearchPriceChange(e)}
            ></input>
        </div>
    </>)
}