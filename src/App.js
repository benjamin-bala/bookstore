import './App.css';
import {BrowserRouter as Switch,Route } from 'react-router-dom'
import Details from './Pages/Details'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Checkout from './Pages/Checkout'
import Cart from './Pages/Cart'

function App() {
  return (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/details/:id' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
    </Switch>
  );
}

export default App;
