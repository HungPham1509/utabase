import './App.css';
import Login from './pages/login/Login'
import {Route} from "react-router";
import Navigation from "./components/navigation/Navigation";
import * as React from "react";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Route path="/login" component={Login}/>
        </div>
    );
}

export default App;
