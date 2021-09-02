
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/Pages/Home";
import Profile from "./Components/ProfilePage/Profile"
import EditProfile from "./Components/ProfilePage/EditProfile"



function App() {
    
  return (
    <>
    <Router>
      <div className="App">
        
        <Route component={SignUp} path='/' exact />
        <Route component={Login} path='/login' exact />
        <Route component={Home} path='/home' exact />
        <Route component={Profile} path='/profile' exact />
        <Route component={EditProfile} path='/editprofile' exact />


     
    </div>
    </Router>
    </>
  );
}

export default App;
