import React from 'react';
import NavBar from './compnonents/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Footer from './compnonents/Footer'
// import Home from './compnonents/screens/Home'
// import Category from './compnonents/screens/category/Category';
import Detail from './compnonents/screens/Detail/Detail';





const Routing = ()=>{

  return(
    <Switch>
      <Route exact path="/" >
        <Detail />
      </Route>
     
    </Switch>
  )
}

function App() {
 
  return (
    <BrowserRouter>
     <NavBar />
      <Routing />
     <Footer />
      
    </BrowserRouter>
    
  );
}

export default App;
