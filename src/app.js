import React from 'react';
import Carosel from './carosel';
import Catagory from './Catagory';
import Footer from './footer';
import Navbar from './Navbar';

export default function App() {
    return (
        <div>
       <Navbar></Navbar>
       <br/>
      
       <Carosel></Carosel>
       
       <Catagory></Catagory>
       <Footer></Footer>
        </div>
    )
}
