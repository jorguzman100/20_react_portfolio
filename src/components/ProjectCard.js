import React from "react";

const ProjectCard = (props) => {
  return (
    <div
      key={props.project.id}
      className="card text-white projectCard"
      data-index={props.project.id}
      style={{ display: props.cardIndex == props.project.id ? "block" : "none" }}
    >
      <img src={() => require(props.project.projectImage)} className="card-img" alt="Project card" />
      <div
        className="card-img-overlay"
        data-index={props.project.id}
        onMouseLeave={props.handleProjectMouseLeave}
      >
        
        <a href={props.project.deploy} target="_blank">
          <i className="far fa-play-circle"></i>
        </a>
        <a href={props.project.repo} target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

// The Like, Liked, and Share buttons
/* 
<a href="#" className="aLike" id={`like${props.project.id}`}>
          <i className="far fa-thumbs-up like"></i>
        </a>
        <a href="#" className="aLiked" id={`liked${props.project.id}`}>
          <i className="fas fa-thumbs-up liked"></i>
        </a>
        <a href="#">
          <i className="fas fa-share-alt share"></i>
        </a>
*/