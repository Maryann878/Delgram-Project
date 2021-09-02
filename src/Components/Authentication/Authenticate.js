import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './Login'
import SignUp from './SignUp'

function Authenticate({ username, setUserName, password, setPassword, HandleLogin, HandleSignUp}) {
    return (
        <div>
        
            
            <Switch>
                <Route exact path = "/"><Login
                username={username}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                HandleLogin={HandleLogin}
                HandleSignUp={HandleSignUp}
                /></Route>
                <Route path = "/SignUp"><SignUp/></Route>
             </Switch>

        </div>
    )
}

export default Authenticate
