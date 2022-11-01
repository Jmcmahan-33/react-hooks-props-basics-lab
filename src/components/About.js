import React from "react";
import Links from "./Links"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.github} linkedin = {props.linkedin}/>
    </div>
  );
}

export default About;

// ✕ does not render a <p> element if the bio is not included in props (9 ms)
// ✕ does not render a <p> element if the bio is an empty string (4 ms)
//pseudo code 
 //if bio has property with content, render to the page with a p tag
  //otherwise if there is no bio for for the property, return null(no p tag)
