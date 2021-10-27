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

          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
