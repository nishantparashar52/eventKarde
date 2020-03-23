import React from 'react';
import Home from '../containers/Home';
import Wedding from '../containers/Wedding';
import Corporate from '../containers/Corporate';
import Clients from '../containers/Clients';
import Contact from '../containers/Contact';
// import react router
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div className="">
      <Route path="/" component={Home} />
      <Route path="/wedding" component={Wedding} />
      <Route path="/corporate" component={Corporate} />
      <Route path="/clients" component={Clients} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
)

export default App