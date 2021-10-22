import { FaShoppingCart } from "react-icons/fa";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Inventory from './pages/Inventory';
import Cart from './pages/Cart'

const Header = () => {
    return (
        <div className="App-header">
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/cart"><FaShoppingCart/></Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/inventory">
                            <Inventory />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Header
