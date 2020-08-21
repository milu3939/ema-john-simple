import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import ProductDetail from './component/ProductDetail/ProductDetail';
import Login from './component/login/Login';

import { AuthContextProvider, PrivateRoute } from './component/useAuth';
import Ship from './component/ship/Ship';



function App() {
   
  return (
    <div className="App">
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/ship">
              <Ship></Ship>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
