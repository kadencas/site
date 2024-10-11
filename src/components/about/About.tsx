import React from "react";
import "./About.css";


export default function About() {
    return (
        <div>
            <h1 className="header-bg">About</h1>
            <div className="about-section flex">
                <div className="about-content">
                    <img src="/photos/headshot.jpg" alt="Kaden Headshot" className="about-image" />
                    <p className="about-text">
                        Hi, I'm Kaden. I'm a full-stack engineer with a background in business and a creative, hard-working personality.<br /><br />

                        Guided by one of my favorite philosophies, Kaizen, or "change for the better," I'm committed to continuous improvement in all my endeavors, both personally and organizationally.<br /><br />

                        In line with this principle, I'm expanding my expertise by learning modern technologies. These tools empower me to develop elegant business solutions in an ever-evolving, technology-driven environment. I'm passionate about contributing to innovative, cutting-edge companies where I can leverage my unique blend of management skills and technical knowledge to drive meaningful impact. I'm eager to collaborate with forward-thinking teams and continue my journey of growth and improvement.
                    </p>
                </div>
            </div>
        </div>
    )
}