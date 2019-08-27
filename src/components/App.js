import React from 'react';
import {useSelector} from 'react-redux';
import Header from './header';
import NavBar from './NavBar';
import { BrowserRouter as Router,Route,} from "react-router-dom";



const App = function() {
    const foods = useSelector( (state) => state )
      return (
         <div>
             {console.log(foods)}
          <Route path = "/" render = {(props) => <Header {...props} />}/>
           <NavBar />
         </div>
      );
}

export default App;
