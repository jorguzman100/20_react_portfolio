import React from "react";

const IntroCard = (props) => {
  const { project } = props;
  console.log('project: ', project);
  const introImage = project.introImage;
  return (
    <div
      key={props.project.id}
      className="card text-white introCard"
      data-index={props.project.id}
      style={{ display: props.cardIndex == props.project.id ? "none" : "block" }}
    >
      <img
        src={introImage}
        className="card-img"
        alt="Intro card background"
      />
      <div
        className="card-img-overlay"
        data-index={props.project.id}
        onMouseEnter={props.handleIntroMouseEnter}
      >
        <h5 className="card-title">{props.project.title}</h5>
        <p className="card-text">{props.project.description}</p>
      </div>
    </div>
  );
};

export default IntroCard;
