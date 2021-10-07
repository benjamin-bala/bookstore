import './App.css';
import {BrowserRouter as Switch,Route } from 'react-router-dom'
import Details from './Pages/Details'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Checkout from './Pages/Checkout'
import Cart from './Pages/Cart'
import Categories from './Pages/Categories';
import Success from './Pages/success';

function App() {
  return (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/categories' component={Categories} />
        <Route path='/details/:id' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/success' component={Success} />
    </Switch>
  );
}

export default App;
