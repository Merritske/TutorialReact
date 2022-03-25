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

ReactDOM.render(

<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={ <App /> } />
<Route path='/blog' element={<Blog/>} />
<Route path='/contact' element={<Contact/>} />

</Routes>
<Footer/>
</BrowserRouter>,

  document.getElementById('root')
);
