import React, { useState,useEffect } from 'react';
import TopNav from "../../TopNav";
import Pet from "./Pet";
import UnlockPets from "./UnlockPets";
import Footer from "../../Footer";
import "./myPets.scss";

export default function MyPets() {
  const user = {
    id: 4,
    username: "username4",
    email: "username4@gmail.com",
    experience_points: 30,
    level: 3,
    character: {
      id: 1,
      avatar_url: "https://robohash.org/340c525dec61deba2666cb58c149840e?set=set1&bgset=&size=400x400",
      charactor_model: "https://img.freepik.com/free-vector/athlete-doing-isolated_1308-38032.jpg?w=996&t=st=1659985157~exp=1659985757~hmac=26a86086e35a3e9dba3bf83ea41b604851f16693a03d025f6c5eb6633f23d0cf"
    }
  };

  const [open, setOpen] = useState(true);
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
      (async () => {
        const Response = await fetch('http://localhost:8080/animals');
        const content = await Response.json();
        setAnimals(content);
         })();
  }, []);

 const list = animals.map(animal=>{
  console.log(animal.required_level);
  console.log("user's level",user.level);
  if(animal.required_level > user.level){
    return <UnlockPets key={animal.id} pet={animal}/>
  }
    return <Pet key={animal.id} pet={animal}/>
  
 });


  return (
    <div onClick={() => setOpen(true)}>
      <TopNav />  
    <main>
      <section className="py-1 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Your Animals</h1>
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
            {list}
          </div>
        </div>
      </div> 
    </main>

    <Footer/>
    
    </div>
  );
}