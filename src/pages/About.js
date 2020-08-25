import React from "react";
import Section from "../components/Section";

// Components
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
    return (
        <div>
            <Section title={"About"} id="about">
                <p>
                    I am a full Stack Web Developer and HR professional with strong experience providing solutions aligned to business goals. Motivated for facing challenges with a collaborative, enthusiastic, and value-added mindset. Industrial and Systems Engineer with a Certificate in Full Stack Web Development from Tec de Monterrey which included HTML, CSS, JavaScript, Node.js, and Express.js. Additionally, Business Administration Postgraduate studies from Liverpool Hope University, and a certificate in Project Management from Deloitte. Passionate about coding, finding practical solutions, working collaboratively, leading and developing people, make me a strong asset for business and engineering teams.
                </p>
            </Section>
            <Experience />
            <Education />
            <Skills />
        </div>
    );
};

export default About;
