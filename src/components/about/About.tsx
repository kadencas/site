import React from "react";
import "./About.css"; // Import the CSS file


export default function About() {
    return (
        <div className="about-section flex">
            <div className="about-content">
                <img src="/photos/headshot.jpg" alt="Kaden Headshot" className="about-image" />
                <p>Hi, I'm Kaden. I'm a full-stack engineer with a background in business and a creative, hard-working personality. <br/><br/>
                    Guided by one of my favorite philosophies, Kaizen, or "change for the better", I'm dedicated to continuous improvement in all my endevours, personally and orginizationally.<br/><br/>

In alignment with this principle, I'm enhancing my skillset by learning modern technology tools. These tools enable me to understand and build elegent business solutions in an evolving, technology-dominant business environment.

I'm passionate about contributing to innovative, cutting-edge companies where I can leverage my unique blend of management skills and technical expertise to drive meaningful impact. I'm eager to collaborate with forward-thinking teams and continue my journey of growth and improvement. 
                </p>
            </div>
        </div>
    )
}