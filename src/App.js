import "./styles.css";
import React from "react";
import Weather from "./Weather"
// import axios from "axios";

export default function App() {
    return(
      <div className="App"> 
          <Weather defaultCity="Bratislava" />
          <footer>
          <div className="footer-year-link">
            © 2022 ·&nbsp;
            <a
              href="https://dancing-taiyaki-3defad.netlify.app/index.html"
              className="portfolio-link"
              title="Check my portfolio"
              target="blank"
            >
              Zuzana Stellmachova
            </a>
            <span className="dash">&nbsp;-&nbsp;</span>
            <span className="job-title">Front-End Developer</span>
            <span className="dot">&nbsp;·&nbsp;</span>
            {/* <div className="linkRepository" title="GitHub repository" target="blank"></div> */}
          </div>
          <a
            className="linkRepository"
            href="https://github.com/ZuzanaStellmachova/weatherapp-in-react"
            target="blank"
          >
            GitHub repository
          </a>
        </footer>
      </div>
    );
}
      