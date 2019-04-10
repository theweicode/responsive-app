import React, { Component } from "react";

/* import Background from "../images/gskin_2x.png"; */

const project1 = {
  background: `url(https://cdn.dribbble.com/users/14268/screenshots/5395958/reilanding_2x.png) no-repeat center center`
};

class Work extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {};
  async test() {}
  render() {
    return (
      <div className="work">
        <div className="menu-icon">
          <i class="fas fa-bars" />
        </div>
        <section id="menu">
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </nav>
        </section>
        <section className="info-section">
          <div className="logo">Will</div>
          <div className="info-box">
            <h4>Email</h4>
            <p>williamting@gmail.com</p>
            <h4>Phone</h4>
            <p>949-829-1403</p>
            <h4>Find Me On</h4>
            <div className="icon-section">
              <a href="#">
                <i className="fab fa-github" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
              <a href="#">
                <i className="fab fa-codepen" />
              </a>
              <a href="#">
                <i className="fab fa-stack-overflow" />
              </a>
              <a href="#">
                <i className="fab fa-dribbble" />
              </a>
            </div>
          </div>
        </section>
        <section className="content-area">
          <div className="scroll-section">
            {/*             Work Starts */}
            <div className="work-section">
              <div className="title">
                <h1>Latest Works</h1>
              </div>
              <div className="project-section">
                <div className="project-box" style={project1}>
                  <div className="grey-bg">
                    <div className="project-info">
                      <div className="project-details">
                        Client: Nike Year: 2018 Type: Ecommerce
                      </div>
                      <div className="project-title">The Last Yeezys</div>
                      <i class="fas fa-long-arrow-alt-right" />
                    </div>
                  </div>
                </div>
                <div className="project-box" style={project1}>
                  <div className="grey-bg">
                    <div className="project-info">
                      <div className="project-details">
                        Client: Nike Year: 2018 Type: Ecommerce
                      </div>
                      <div className="project-title">The Last Yeezys</div>
                      <i class="fas fa-long-arrow-alt-right" />
                    </div>
                  </div>
                </div>
                <div className="project-box" style={project1}>
                  <div className="grey-bg">
                    <div className="project-info">
                      <div className="project-details">
                        Client: Nike Year: 2018 Type: Ecommerce
                      </div>
                      <div className="project-title">The Last Yeezys</div>
                      <i class="fas fa-long-arrow-alt-right" />
                    </div>
                  </div>
                </div>
                <div className="project-box" style={project1}>
                  <div className="grey-bg">
                    <div className="project-info">
                      <div className="project-details">
                        Client: Nike Year: 2018 Type: Ecommerce
                      </div>
                      <div className="project-title">The Last Yeezys</div>
                      <i class="fas fa-long-arrow-alt-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*             Work Ends */}
          </div>
        </section>
      </div>
    );
  }
}

export default Work;
