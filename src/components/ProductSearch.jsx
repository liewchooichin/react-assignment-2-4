import { initialProducts } from "./productData";
import { useState } from "react";
import PropTypes from "prop-types";
import { ProductList } from "./ProductList";

// {noResults && <p>No results</p>}

function filterName(products, search){
    /**Change the search term to lowercase first */
    search = search.toLowerCase();

    /**In case of multiple words in a name,
     * split the name using space, then some will
     * return any words that starts with the
     * search term.
     */
    return (
        initialProducts.filter((p) =>
            p.name.split(' ').some((word) =>
            word.toLowerCase().startsWith(search))
        )
    )
}

ProductSearch.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      pic: PropTypes.string.isRequired,  
    })),
    label: PropTypes.string.isRequired,
    searchTerm: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired
}
export function ProductSearch({products, label, 
    searchTerm, handleSearchChange}){

    /**Search term */
    const results = filterName(products, searchTerm);
    const noResults = (results.length > 0);

    return(
        <>
        <div>
            <label htmlFor="searchName">{label}</label>
            <input
                id="searchName"
                name="searchName"
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e, e.target.value)}
            ></input>
        </div>
        
        <ProductList products={results}></ProductList>
        </>
    )
}