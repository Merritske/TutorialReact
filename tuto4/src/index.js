import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Layout from './component/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Blog from "./Blog"
import Contact from "./Contact"
import Admin from './Admin';
import ProtectedRoute from './ProtectedRoute';

ReactDOM.render(

<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={ <App helloMessage="this is a test" /> } />
<Route path='/blog'  element={<Blog auth={{email:"merritske@gmail.com"}}/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/admin' element={
  <ProtectedRoute user={{username:"admin", password:"1234"  }} >
    <Admin  />
  </ProtectedRoute>
} />

</Routes>
<Footer/>
</BrowserRouter>,

  document.getElementById('root')
);
