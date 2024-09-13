
export function CountReducer(count, action){
    switch(action.type){
        case "add_count":
            {
                const newCount = count + 1;
                return newCount;
            }
        case "minus_count":
            {
                let newCount = count - 1;
                newCount = (newCount >= 0) ? newCount : 0;
                return newCount;
            }
        case "reset_count":
            {   
                const newCount = 0;
                return newCount;
            }
        default:{
            throw(Error('Unknown action: ' + action.type));
        }
    }
}