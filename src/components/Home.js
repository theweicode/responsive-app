import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => (
  <div className="home ">
    <div className="menu-icon">
      <i className="fas fa-bars" />
    </div>
    <section id="menu">
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>

        <NavLink exact to="/components/Contact" className="ghost-btn">
          Contact
        </NavLink>
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
      <div className="img-container">
        <div className="user-img" />
      </div>

      <div className="profile-section">
        <div className="profile">
          <h1>
            Will <br />
            <span>Ting</span>
          </h1>
          <h5>Web Developer </h5>
          <p>
            Lorem ipsum dolor amet brooklyn edison bulb ramps blog mixtape 8-bit
            crucifix kinfolk keffiyeh iPhone everyday carry fanny pack plaid
            kogi.
          </p>

          <NavLink exact to="/components/Work" className="primary-btn">
            Portfolio
          </NavLink>
          <NavLink exact to="/components/Resume" className="ghost-btn">
            Resume
          </NavLink>
          <NavLink exact to="/components/Contact" className="ghost-btn">
            Contact
          </NavLink>
        </div>
      </div>
    </section>
  </div>
);
export default Home;
