import React from 'react';
import ReactDOM from 'react-dom';
import './assats/style.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
}
from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contactUs';
import Categories from './components/foodCategories';
import Search from './components/Search';
import MenueList from './components/menueList';
import { createStore,applyMiddleware } from 'redux'
import ReduxThunk from "redux-thunk"
import {Provider} from 'react-redux';
import rootReducer from './Store/reducer'



const initialState = {
    Foods : [],
    latestFoods:[],
    categoryFoods:[]
}



const createStoreMiddleware = applyMiddleware(ReduxThunk)(createStore)

const store = createStoreMiddleware(rootReducer,initialState)
const routing = (
    <Router>
        <Route path = "/" component = {App} />
        <Route exact path = "/home" component = {Home} />
        <Route path = "/categories" component = {Categories} />
        <Route path = "/aboutus" component = {About} />
        <Route path = "/search/:name" component = {Search} />
        <Route path = "/contactus" component = {Contact} />
        <Route path = "/MenueList/:name" component = {MenueList} />

    </Router>
)
ReactDOM.render( <Provider store={store}>{routing}</Provider>, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
