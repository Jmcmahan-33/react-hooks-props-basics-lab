import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
// console.log(user.bio)


function App() {
  return (
    <div>
      <NavBar />
      <Home name = {user.name} city = {user.city} color = "firebrick"/>
      <About bio = {user.bio} github = {user.links.github} linkedin = {user.links.linkedin} />
       
    </div>
  );
}

export default App;

// Finally, App should also pass down the github and linkedin links to the About component, so that About can pass those props down to the 
// Links component you will create.

