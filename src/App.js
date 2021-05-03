import React from 'react';
import "bulma/css/bulma.css";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Signup from "./signup/Signup"
import FormField from './formfield/FormField'
import CoolButton from './coolButton/CoolButton'


const App = () => {
  

  return <div> <Navbar />
  <FormField label = {"Name"} placeholder = {'Alex Smith'} type= {'text'}/>
  <FormField label = {"Email"} placeholder = {'e.g. alexsmith@gmail.com'} type= {'email'}/>
  <CoolButton   isDanger >Button 1</CoolButton>
  <CoolButton isInfo >Button 2</CoolButton>


  </div>

}

export default App;
