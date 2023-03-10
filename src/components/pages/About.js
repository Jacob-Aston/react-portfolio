import React from "react";

import avatar from "./../../assets/images/avatar.jpg"

import "../../styles/About.css";


export default function About() {
    return (
        <div>
            <h2>About Page</h2>
            <img src={avatar} className="avatar" alt="a picture of me"></img>
            <p className="about">I'm a strapping young lad with an interest in entrepreneurship and leadership. Through my time Working I have learned the importance of developing a positive culture in the workplace. As well as doing what I can to support the team and my leadership.</p>
            <p className="about">I love the great outdoors. Living in the mountains of Utah. I go on lots of hikes. I do my very best to go on a walk every day. Taking the time to look at the flowers and watch the birds. Enjoying the sun and exercise. I have found it tremendously beneficial to my mental health.</p>
        </div>
    );
}