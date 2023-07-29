import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";

import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <>
      {/*hero section design*/}

      <section className="hero" id="hero">
        <div className="hero-content container-fluid-sm">
          <div className="details">
            <div className="Typewriter">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi there!")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I'm Reyson Carpio!")
                    .start();
                }}
              />
            </div>

            <span className="title">Full-Stack Developer</span>

            <p className="para">
              I design and code beautifully simple things, and I love what I do.
            </p>
          </div>

          <div className="cta">
            <div className="discordmeeting">
              <div className="m-4 badge">
                <a href="https://discord.com/channels/676715102090559499/992690861026590790" className=" border rounded p-2 ">
                  <FontAwesomeIcon icon={faDiscord} /> Join my{" "}
                  <b>Discord Community!</b>
                </a>
              </div>
              <div className="m-4 badge">
                <a href="#" className=" border rounded p-2 ">
                  Book a Meeting!
                </a>
              </div>
            </div>
          </div>

          <div className="container fluid">
            <div className="hero-icons">
              <a href="https://www.facebook.com/reysoncarpio">
                <FontAwesomeIcon className="icons" icon={faFacebook} />
              </a>
              <a href="https://github.com/Proreyson">
                <FontAwesomeIcon className="icons" icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/reyson-carpio-148166283/">
                <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
              </a>
              <a href="https://www.instagram.com/proreyson14/">
                <FontAwesomeIcon className="icons" icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
