

export function ProductReducer(products, action){

    console.log(`Product reducer ${action.type}`);
    switch(action.type){
        case "price_change": {
            console.log("in price change")
            
            const newProducts = products.map((p) => {
                if( p.id === action.productId){
                    console.log(`Id ${p.id}, name ${p.name}, price ${p.price}`)
                    p.price = parseInt(action.newPrice);
                    return p;
                } else {
                    return p; // unchanged
                }
            })
            return newProducts
        }
        default:{
            throw Error(`Unknown type: ${action.type}`);
        }
    }
}