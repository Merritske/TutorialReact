import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import Layout from './component/Layout';
//Layout is vervangen door BrowserRouter
//anders was het Layout/Header/children/footer/Layout
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Blog from "./Blog"
import Contact from "./Contact"
import Admin from './Admin';
import ProtectedRoute from './ProtectedRoute';
import InlogForm from './InlogForm';
import PostDetail from './component/PostDetail';

ReactDOM.render(

<BrowserRouter>
<InlogForm  />
<Header/>
<Routes>
<Route path="/" element={  <App helloMessage="this is a test"  /> } />
<Route path='/blog'  element={<Blog auth={{email:"merritske@gmail.com", password4:"1234"}}/>} />
 <Route path="/blog/:id" element={<PostDetail/>} /> 
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
