import React from 'react';

import email from '../img/email.png';
import linkedin from '../img/linkedin-black.png';
import github from '../img/github.png';

const Footer = () => {
    return (
        <footer className="App-footer">
            <a href="mailto:diep.christopher@gmail.com">
              <img src={email} alt={"Email"} className="footer-logo"/>
            </a>
            <a href="https://www.linkedin.com/in/diepchristopher/" target="blank">
              <img src={linkedin} alt={"LinkedIn"} className="footer-logo"/>
            </a>
            <a href="https://github.com/christphrd/" target="blank">
              <img src={github} alt={"GitHub"} className="footer-logo"/>
            </a>
            <p>
              Copyright © {new Date().getFullYear()} Christopher Diep
            </p>
            <p>
              Built with React.
            </p>
        </footer>
    )
}

export default Footer