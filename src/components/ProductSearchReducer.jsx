

export function ProductSearchReducer(productSearch, action){

    console.log(`Product search reducer ${action.type}`);

    switch(action.type) {
        case "search_change": {
            const newSearch = action.newSearch;
            return newSearch;
        }
            
        default: {
            throw Error("Unknown type: " + action.type);
        }
    }
}