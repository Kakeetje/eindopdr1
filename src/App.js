import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Logo from './Assets/Yang Yang Sushi Logo.png';
import Menu from './Pages/Menu';
import CartIcon from './Assets/shopping-cart-solid.svg';
import ShoppingCart from "./Pages/Components/ShoppingCart";

function App() {

  return (
      <header>
        <>
          <Router>
            <div>
              <div className="header-home">
              <nav>
                <div className="Nav-Balk">
                  <Link to="/">
                  <img className="YangYang" src={Logo} alt="Yang-Yang" height="100" width="250"/>
                  </Link>
                </div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                </ul>
                <div className="Nav-Cart">
                  <span>0</span>
                    <Link to="/cart">
                      <img src={CartIcon} alt="" width="20" />
                    </Link>
                </div>
              </nav>
              </div>

              <Switch>
                <Route exact path="/">
                  <Home />
                </ Route>
                <Route path="/menu">
                  <Menu />
                </Route>
                <Route path="/products" component={ShoppingCart}/>
              </Switch>
            </div>
          </Router>
        </>
      </header>
  );
}

export default App;
