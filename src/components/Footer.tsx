import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ManuelAB09" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/manuel-artero-bellido-a65347387" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/ManuelAB09/portfolio" target="_blank" rel="noreferrer">Manuel Artero Bellido</a> with 💜</p>
    </footer>
  );
}

export default Footer;