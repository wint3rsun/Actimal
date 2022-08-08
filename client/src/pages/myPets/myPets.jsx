import React, { useState } from 'react';
import TopNav from "../../TopNav";
import Pet from "../../Pet";
import Footer from "../../Footer";
import "./myPets.scss";

export default function MyPets() {
  const [open, setOpen] = useState(true);
  return (
    <div onClick={() => setOpen(true)}>
      <TopNav />  
    <main>
      <section className="py-1 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Your Cats</h1>
            <p className="lead text-muted">Something short to descrbe the pet rules or something</p>
            <p>
              <a href="#" className="btn btn-primary my-2">some button</a>
            </p>
          </div>
        </div>
      </section>
    
      <div className="album py-5 bg-light">
        <div onClick={(e) => {
          e.stopPropagation();
        }} className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Pet open={open}/>
          <Pet /> 
          <Pet /> 
          <Pet /> 
          <Pet /> 
          <Pet /> 
          <Pet /> 
          <Pet /> 
          <Pet />     
          </div>
        </div>
      </div> 
    </main>

    <Footer/>
    
    </div>
  );
}