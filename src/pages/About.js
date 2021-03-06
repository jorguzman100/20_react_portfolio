import React, {useEffect} from "react";
import Section from "../components/Section";

// Components
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

const About = (props) => {
  console.log('About - props.scrollToId: ', props.scrollToId);

  useEffect(() => {
    console.log("inside hook")
    // Scroll to section
    let scrollToSection = document.querySelector('#about' || `#${props.scrollToId}`);
    scrollToSection.scrollIntoView({behavior: 'smooth'});
  }, [props.scrollToId]);

  
  return (
    <div>
      <Section title={"About"} id="about">
        <div className="aboutText p-4" id="parallax2">
          <div className="container">
            <p className="mt-5 mb-5">
              I am a full Stack Web Developer and HR professional with strong
              experience providing solutions aligned to business goals.
            </p>
            <p className="mt-5 mb-5">
              Motivated for facing challenges with a collaborative,
              enthusiastic, and value-added mindset.
            </p>
            <p className="mt-5 mb-5">
              Industrial and Systems Engineer with a Certificate in Full Stack
              Web Development from Tec de Monterrey which included HTML, CSS,
              JavaScript, Node.js, and Express.js.
            </p>
            <p className="mt-5 mb-5">
              Additionally, Business Administration Postgraduate studies from
              Liverpool Hope University, and a certificate in Project Management
              from Deloitte. Passionate about coding, finding practical
              solutions, working collaboratively, leading and developing people,
              make me a strong asset for business and engineering teams.
            </p>
          </div>
        </div>
      </Section>
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

export default About;
