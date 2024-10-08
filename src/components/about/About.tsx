import React from "react";
import "./About.css"; // Import the CSS file


export default function About() {
    return (
        <div className="about-section flex">
            <div className="about-content">
                <img src="/photos/headshot.jpg" alt="Kaden Headshot" className="about-image" />
                <p>Hello, I'm Kaden. I'm an experienced full-stack engineer with a background in business. Guided by one of my favorite philosophies—Kaizen, which means "change for the better" and embodies continuous improvement—I am dedicated to lifelong learning and personal growth.

In alignment with this principle, I'm enhancing my skillset by mastering modern technology tools. This commitment enables me to deeply understand the evolving business-technology landscape.

I'm passionate about contributing to innovative, cutting-edge tech companies where I can leverage my unique blend of management skills and technical expertise to drive meaningful impact. I'm eager to collaborate with forward-thinking teams and continue my journey of growth and improvement.
                </p>
            </div>
        </div>
    )
}