import React from "react";
import IntroCard from "./IntroCard";
import ProjectCard from "./ProjectCard";
import projects from "../utils/projects";

const CardContainer = (props) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            {projects.map((project) => {
                return (
                    <div className="col mb-4" key={project.id}>
                        <IntroCard
                            project={project}
                            cardIndex={props.cardIndex}
                            handleIntroMouseEnter={props.handleIntroMouseEnter}
                        />
                        <ProjectCard
                            project={project}
                            cardIndex={props.cardIndex}
                            handleProjectMouseLeave={props.handleProjectMouseLeave}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CardContainer;
