

export function CredentialReducer(credential, action){
    switch(action.type){
        case "username_change":{
            const newUsername = action.newUsername;
            const newItem = {
                ...credential,
                username: newUsername,
            }
            return newItem;
        }
        case "password_change": {
            const newPassword = action.newPassword;
            const newItem = {
                ...credential,
                password: newPassword,
            }
            return newItem;
        }
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }
}