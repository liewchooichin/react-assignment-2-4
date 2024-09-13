//import { initialProducts } from "./productData";
import { useState } from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";
import { ProductReducer } from "./ProductReducer";
import "./Lesson24App.css";


  /**
   * Using Input field min and max to control for negative 
   * numbers in price.
   */
  EditProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      pic: PropTypes.string.isRequired,  
    })),
    handleProductPriceChange: PropTypes.func.isRequired,
}

 export function EditProductList({products,
  handleProductPriceChange
 }) {
    
/*   const [products, productDispatch] = 
      useReducer(ProductReducer, products);

    function handleProductPriceChange(e, productId){
      console.log(`Product price ${e.target.name} ${e.target.value}`);

      productDispatch({
        type: "price_change",
        productId: productId,
        newPrice: e.target.value,
      })
    }
 */
    return (
      <>
        <ul>
            {   
                products.map((p) => (
                    <li 
                      key={p.id}
                      className="boxListItem"
                    >
                        Name: {p.name} {p.pic}
                        Price: {p.price},
                        <form>
                          <label htmlFor="price">Price</label>
                          <input 
                            type="number"
                            value={p.price}
                            id="price"
                            name="price"
                            min="1"
                            max="100"
                            required
                            onChange={(e) => handleProductPriceChange(e, p.id)}
                          ></input>
                        </form>
                    </li>
                ))
            }
        </ul>
      </>
    );
  }
  

  