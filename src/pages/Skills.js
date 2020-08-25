import React from "react";
import Section from "../components/Section";

const Skills = () => {
  return (
    <Section title={"Skills"} id="skills">
      <section className="row mb-5 p-4 bg-white text-dark features">
        <div className="col mb-2">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 pl-0">
              <div className="col mb-3">
                <i className="fas fa-globe display-4 align-middle mr-2 softSkillIcon"></i>
                <p className="d-inline align-middle">
                  Fluid in Spanish and English
                </p>
              </div>
              <div className="col mb-3">
                <i className="fas fa-chalkboard-teacher display-4 align-middle mr-2 techSkillIcon"></i>
                <p className="d-inline align-middle">
                  HTML, CSS, JavaScript, ReactJS.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 pl-0">
              <div className="col mb-3">
                <i className="fas fa-user-friends display-4 align-middle mr-2 softSkillIcon"></i>
                <p className="d-inline align-middle">
                  Team player, Passionate, Develop people
                </p>
              </div>
              <div className="col mb-3">
                <i className="fas fa-server display-4 align-middle mr-2 techSkillIcon"></i>
                <p className="d-inline align-middle">
                  Node, Express, MySQL, MongoDB, PWAs.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 pl-0">
              <div className="col mb-3">
                <i className="fas fa-chart-line display-4 align-middle mr-2 softSkillIcon"></i>
                <p className="d-inline align-middle">
                  Strategic and Project Manager
                </p>
              </div>
              <div className="col mb-3">
                <i className="fas fa-sync-alt display-4 align-middle mr-2 techSkillIcon"></i>
                <p className="d-inline align-middle">Git, GitHub, Heroku</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Skills;
