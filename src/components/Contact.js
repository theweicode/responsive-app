import React from "react";
import { NavLink } from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { condition: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    });
  }

  render() {
    return (
      <div className={this.state.condition ? "contact" : "contact menu-active"}>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className="fas fa-bars" />
        </div>
        <section id="menu">
          <nav>
            <NavLink to="/" className="ghost-btn">
              Home
            </NavLink>
            <NavLink exact to="/components/Work" className="ghost-btn">
              Portfolio
            </NavLink>
            <NavLink exact to="/components/Resume" className="ghost-btn">
              Resume
            </NavLink>
            <NavLink onClick={this.handleClick} className="ghost-btn">
              Contact
            </NavLink>
          </nav>
        </section>
        <section className="info-section">
          <div className="logo" onClick={this.handleClick}>
            Will
          </div>
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
            </div>
          </div>
        </section>
        <section className="content-area">
          <div className="message-container">
            <div className="form-section">
              <form action="/" method="POST">
                <h4>Send a Message</h4>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  name="budget"
                  placeholder="Select Your Budget Range"
                />
                <textarea
                  name="message"
                  rows="12"
                  placeholder="Your Message"
                  required
                />
                <button type="submit">SEND MESSAGE</button>
              </form>
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-info">
              <h1>Contact Us</h1>
              <div className="contact-box">
                <h5>Phone</h5>
                <p>949-829-1403</p>
              </div>
              <div className="contact-box">
                <h5>Email</h5>
                <p>williamting@gmail.com</p>
              </div>
              <div className="contact-box">
                <h5>Address</h5>
                <p>62 Thornhurst Irvine, CA 92620</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
