import React from "react";
import "./Contact.css"

export default function Contact() {
    return (
        <div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/kadencasanave/" target="_blank" rel="noopener noreferrer">
                    <img src="./photos/linked.jpg" alt="LinkedIn" className="icon" />
                </a>
                <a href="https://github.com/kadencas" target="_blank" rel="noopener noreferrer">
                    <img src="./photos/github.jpg" alt="GitHub" className="icon" />
                </a>
                <a href="mailto:kadencasanave@gmail.com">
                    <img src="./photos/email.jpg" alt="Email" className="icon" />
                </a>
            </div>
        </div>
    )
}