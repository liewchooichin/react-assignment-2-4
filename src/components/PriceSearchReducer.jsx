

export function PriceSearchReducer(priceSearch, action){

    console.log(`Price search reducer ${action.type}`);

    switch(action.type) {
        case "price_change": {
            const newPrice = action.newPrice;
            return newPrice;
        }
            
        default: {
            throw Error("Unknown type: " + action.type);
        }
    }
}