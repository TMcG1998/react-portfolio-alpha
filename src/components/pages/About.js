import React from 'react';
import myFace from "../../assets/images/profile.jpg";

export default function About() {
  return (
    <div>
      <h2>About Me!</h2>
      <img 
                src={myFace} 
                className="img-thumbnail mx-1"
            />
      <p>
        Hi! My name is Thomas, but I tend to go by Tommy to most people who know me. I've had an interest in how the internet works ever since I could use a computer, and over the years that curiosity has led me to making a leap into web development.

        I spent 2 years at Rockland Community College getting an Associate's Degree in Computer Information Systems, and then did another year at the University at Buffalo learning more about Computer Science. From there I earned a certificate from Columbia University's web development boot camp and here I am!
      </p>
    </div>
  );
}