import { useState, useEffect } from "react";
import "./home.scss";
import Move from "./Move";
import BgMove from "./BgMove";


export default function Home({setUser}) {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [user, setUser] = useState({});
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('submit successflu');
      // const { username, password } = initialValues;
      console.log('submit',formValues);
      (async () => {
        const Response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formValues)
        });
        const content = await Response.json();
        console.log("user",content);
        if(content.jwtToken){ 
          setUser(content);
          console.log('in here successflu');
          localStorage.setItem('data', JSON.stringify(content));
          window.location.href = "http://localhost:3002/challenges";
          
        }
         })();
        
    }
  }, [formErrors]);
  
  
  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };


  return (
    <div className="homePage">
      <div className="wrapper">
        <div className="logo">
          <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
        </div>
        <div className="text-center mt-4 name">
          Member Login
        </div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-user" aria-hidden="true"></span>
            <input type="text" name="username" id="userName" value={formValues.username} onChange={handleChange} placeholder="Username" />
          </div>
          <p>{formErrors.username}</p>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-key" aria-hidden="true"></span>
            <input type="password" name="password" id="pwd" value={formValues.password} onChange={handleChange} placeholder="Password" />
          </div>
          <p>{formErrors.password}</p>
          <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a> or <a href="/register">Sign up</a>
        </div>
      </div>

      <BgMove></BgMove>
      <Move />
    </div>
  );
}