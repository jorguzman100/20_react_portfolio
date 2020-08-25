import React from "react";
import Section from "../components/Section";

const Contact = () => {
  return (
    <Section title={"Contact"}>
      <main className="row row-cols-1 mt-4">
        <div className="col bg-white p-4 mb-5">
          <h4 className="text-center">
            Do you want to start a project with us or have any questions?
          </h4>

          {/* Form */}
          <form className="mt-4 contactForm">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col form-group">
                    <label>Name</label>
                    <input className="form-control" id="inputName" />
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2">
                  <div className="col form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      aria-describedby="emailHelp"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="col form-group">
                    <label>Mobile</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="inputMobile"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group">
                    <label>Tell us about your project!</label>
                    <textarea
                      className="form-control"
                      id="details"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input registerMeBox"
                      id="check1"
                    />
                    <label className="form-check-label registerMeText">
                      {" "}
                      Register me for news and promotions{" "}
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <button type="submit" className="btn btn-light">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* /Form */}
        </div>

        {/* Direct Contact */}
        <section className="col bg-white p-4 mb-5">
          <h4 className="text-center">More options to contact and explore</h4>
          <div className="row mb-5 p-4 bg-white contactOptions">
            <div className="col mb-2">
              <div className="row row-cols-1 row-cols-md-2 pl-5">
                <div className="col mb-3">
                  <a href="https://github.com/jorguzman100" target="_blank">
                    <i className="fab fa-github display-4 align-middle mr-2"></i>
                    <p className="d-inline align-middle">GitHub</p>
                  </a>
                </div>
                <div className="col mb-3">
                  <i className="fas fa-envelope display-4 align-middle mr-2"></i>
                  jorguzman100@gmail.com
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-2 pl-5">
                <div className="col mb-3">
                  <a
                    href="https://www.linkedin.com/in/jorge-guzman-992401a/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin display-4 align-middle mr-2"></i>
                    <p className="d-inline align-middle">LinkedIn</p>
                  </a>
                </div>
                <div className="col mb-3">
                  <i className="fas fa-phone-alt display-4 align-middle mr-2"></i>
                  <p className="d-inline align-middle">+5255-23386554</p>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-2 pl-5">
                <div className="col mb-3">
                  <a
                    href="https://www.facebook.com/jorguzman75"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square display-4 align-middle mr-2"></i>
                    <p className="d-inline align-middle">Facebook</p>
                  </a>
                </div>
                <div className="col mb-3">
                  <a
                    href="https://drive.google.com/file/d/1erBwvUvfk0kr33BizV7c_CMqO0BSb5wQ/view?usp=sharing "
                    target="_blank"
                  >
                    <i className="fas fa-file-pdf display-4 align-middle mr-2"></i>
                    <p className="d-inline align-middle">View Resume</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-right" id="cheers">
            I will be glad to hear form you!
          </h5>
        </section>
        {/* /Direct Contact */}
      </main>
    </Section>
  );
};

export default Contact;
