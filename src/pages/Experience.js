import React from "react";
import Section from "../components/Section";

const Experience = () => {
  return (
    <Section title={"Experience"} id="experience">
      <h4>Projects</h4>
      <h5>
        <strong>Book Shelf</strong> |{" "}
        <a href="https://bit.ly/3jN0bg5">Repository</a> |{" "}
        <a href="https://bit.ly/2BBCPZG">Deployed application</a> | Project
        Leader
      </h5>
      <ul>
        <li>The Book Shelf is a full stack web application where a user can register, browse in a book database, select books, add them to a purchasing cart, and review purchase history.</li>
        <li>User authentication, use of external dataset, Sequelize database, Node Express application, MVC model.</li>
        <li>Responsible of the project planning, project management, the backend, and the frontend.</li>
        <li>Tools / languages: Handlebars, CSS Bootstrap, JavaScript, jQuery, AJAX, Balsamiq, Kaggle dataset, Sequelize, Node, Express, Bcrypt, Passport, MomentJS</li>
          </ul>
          <h5>
        <strong>WikiDrinks</strong> |{" "}
        <a href="https://bit.ly/37aIvVT">Repository</a> |{" "}
        <a href="https://bit.ly/3dHzuGv">Deployed application</a> | Project
        Manager
      </h5>
      <ul>
              <li>WikiDrinks is a modern website which provide users the possibility to search for drinks, in order to obtain the ingredients, measures, and preparation instructions. All within a funny and engaging user experience with gifs and drinks related articles.</li>
              <li>Modern website, beautiful design, funny and engaging experience.</li>
              <li>Responsible of the project planning, project management, defined the Minimum Viable Products (MVPs), and participated in both front and back end tracks.</li>
              <li>Tools / languages: HTML, CSS Materialize, JavaScript, jQuery, AJAX, Balsamiq,  CocktailDB API, Giphy API, and NYT API.</li>
      </ul>
    </Section>
  );
};

export default Experience;
