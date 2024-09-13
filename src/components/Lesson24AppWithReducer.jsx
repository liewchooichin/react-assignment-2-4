import { useState } from "react";
import "./Lesson24App.css";
import { useReducer } from "react";
import { ProductList } from "./ProductList";
import { CountReducer } from "./CounterReducer";
import { PriceSearch } from "./PriceSearch";
import { ProductSum } from "./ProductSum";
import { ProductButton } from "./ProductButton";
import { ProductSearchReducer } from "./ProductSearchReducer";
import { ProductSearch } from "./ProductSearch";
import { UserBar } from "./UserBar";
import { initialProducts } from "./productData";
import { ProductReducer } from "./ProductReducer";
import { PriceSearchReducer } from "./PriceSearchReducer";
import { filterPrice } from "./PriceSearch";
import { EditProductList } from "./EditProductList";

export function Lesson24CounterApp() {
  //const [count, setCount] = useState(0);
  const [count, countDispatch] = useReducer(CountReducer, 0);
  const [productSearch, productSearchDispatch] = 
    useReducer(ProductSearchReducer, "");
  const [products, productDispatch] = 
    useReducer(ProductReducer, initialProducts);
  const [priceTerm, priceSearchDispatch] = 
    useReducer(PriceSearchReducer, 100);
  //const [discount, setDiscount] = useState(0);
  // derived discount value
  const discount = (count >= 5) ? 20 : 0;
  const price = 3;
  // search results based on products
  // search on product name or price
  const results = filterPrice(initialProducts, priceTerm);

  function handlePlus(){
    countDispatch({
      type: "add_count"
    });
  };

  function handleMinus(){
    countDispatch({
      type: "minus_count"
    });
  };

  function handleReset (){
    countDispatch({
      type: "reset_count"
    })
  }
  function handleSearchChange(e, newSearch){
    productSearchDispatch({
      type: "search_change",
      newSearch: newSearch
    })
  }
  function handleSearchPriceChange(e){
    priceSearchDispatch({
      type: "price_change",
      newPrice: e.target.value,
    })
  }
  function handleProductPriceChange(e, productId){
    console.log(`Product price ${e.target.name} ${e.target.value}`);

    // If the value is empty or NaN, no need to call
    productDispatch({
      type: "price_change",
      productId: productId,
      newPrice: e.target.value,
    })
  }

  return (
    <>
      <UserBar></UserBar>
      <h1>Products</h1>
      
{/*       <ProductSearch
        products={products}
        label={"Search products by name"}
        searchTerm={productSearch}
        handleSearchChange={handleSearchChange}
      >
      </ProductSearch> */}
      
      <PriceSearch
        products={products}
        label={"List products with price below"}
        priceTerm={priceTerm}
        handleSearchPriceChange={handleSearchPriceChange}
      >
      </PriceSearch>
      <h3>Search resutls</h3>
      <ProductList products={results}></ProductList>

      <h2>Product list</h2>
      <EditProductList
        products={initialProducts}
        handleProductPriceChange={handleProductPriceChange}
      ></EditProductList>
       <ProductSum products={products}></ProductSum>

      <hr/>
      <ProductButton label={"-"} handleClick={handleMinus}>
      </ProductButton>
      <span>{count}</span>
      <ProductButton label={"+"} handleClick={handlePlus}>
      </ProductButton>
      <p>
         <ProductButton label={"Reset"} handleClick={handleReset}>
        </ProductButton>
      </p>
      
      <h3>{`Discount: ${discount}%`}</h3>
      
     
    </>
  );
}
