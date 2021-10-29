import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import { AnimatePresence } from 'framer-motion'

import { StoreProvider } from './utils/GlobalState';
import Home from './pages/Home';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import NavTabs from './components/NavTabs';
import Cart from './pages/Cart';
import Faq1 from './pages/FAQs'
import Signup from './pages/Signup';
import Payment from './pages/Payment';
import Shipping from './pages/Shipping';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Success from './pages/Success';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <StoreProvider>
              <NavTabs />
              <AnimatePresence>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/Login">
                    <Login />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/Signup">
                    <Signup />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/inventory">
                    <Inventory />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/cart">
                    <Cart />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/FAQs">
                    <Faq1 />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/Payment">
                    <Payment />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/Shipping">
                    <Shipping />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/Contact">
                    <Contact />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/Company">
                    <Company />
                  </Route>
                </Switch>
              </AnimatePresence>
              <AnimatePresence>
                <Switch>
                  <Route path="/Success">
                    <Success />
                  </Route>
                </Switch>
              </AnimatePresence>
            </StoreProvider>
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;


