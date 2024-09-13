import styles from "./UserBar.module.css";
import btnStyles from "./Button.module.css";
import { useReducer } from "react";
import { CredentialReducer } from "./CredentialReducer";


const initialCredential = {
    username: "",
    password: ""
}

export function UserBar(){

    const [credential, credentialDispatch] = 
        useReducer(CredentialReducer, initialCredential);
    
    /**[e.target.name] will automatically take the correct
     * field name and value.
     */
    function handleCredentialChange(e){
        return({
            ...credential,
            [e.target.name]: e.target.value,
        })
    }

    /**The [e.target.name] works also. */
    function handleUsernameChange(e, newUsername){
        credentialDispatch({
            type: "username_change",
            newUsername: newUsername
            /* [e.target.name]: e.target.value, */
        })
    }
    function handlePasswordChange(newPassword){
        credentialDispatch({
            type: "password_change",
            newPassword: newPassword
        })
    }
    function handleLoginClick(e){
        const u = credential.username;
        const p = credential.password;
        e.preventDefault();
        alert(`Login with username ${u} and password ${p}`);
    }

    return(
        <div className={styles.userBarContainer}>
            <form>
                <label>
                    Username
                </label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    value={credential.usename}
                    onChange={e => handleUsernameChange(e, e.target.value)}
                >
                </input>

                <label>
                    Password
                </label>
                <input 
                    id="password"
                    name="password"
                    onChange={e => handlePasswordChange(e.target.value)}
                    type="text"
                    value={credential.password}
                >
                </input>

                <br/>
                <button 
                    className={btnStyles.Button}
                    type="button"
                    onClick={e => handleLoginClick(e)}
                >
                        Login
                </button>
                <p>Username: {credential.username}</p>
                <p>Password: {credential.password}</p>
            </form>
        </div>
    )
}