import React, {Component} from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
// import Main from "./components/Main";
import MainHeader from "./components/MainHeader";
import Dashboard from "./components/DashBoard";
import Main from "./components/Main";



class App extends Component{
  render() {
      
      return <Router>
      <Route exact path="/" component={Main} />
      
      
          
      </Router>
  
  }
}

export default App;
