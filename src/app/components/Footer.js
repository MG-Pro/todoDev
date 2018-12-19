import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__contacts">
          <a href="https://github.com/MG-Pro" className="footer__contacts-link">
            <i className="fa fa-github"/> MG-Pro
          </a>
          <br/>
            <span className="footer__contacts-copy"><i className="fa fa-copyright"/></span>
            <span className="footer__contacts-date"> {(new Date()).getFullYear()}</span>
        </div>
      </div>
    </footer>
    )
};

export default Footer;
