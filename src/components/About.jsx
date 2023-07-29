import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faPhp,
  faLaravel,
  faBootstrap,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const [text, setText] = useState("");
  const fullText =
    "Hi I'm Reyson Carpio. I'm a junior web developer from Philippines and I live in San Pablo Sto. Tomas, Batangas. I'm 28 years old. I really enjoy what i do right now, in my opinion, creating a programs is not just a job, but also an art that has aesthetic value.";
  const delay = 30;

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const typeText = () => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setText(currentText);
        index++;
        setTimeout(typeText, delay);
      }
    };

    typeText();
  }, []);

  return (
    <>
      <div className="about-section pt-5">
        <div className="container">
          <div className="row container">
            <div className="col-6">
              <img
                id="profilepic"
                className="img-fluid"
                src="./Images/picture.png"
                alt="profilepicture"
              />

              <div className="row pt-5">
                <div id="CV" className="col-12 w-75 badge">
                  <a href="#" className=" border rounded p-2">
                    Download CV
                  </a>
                </div>
              </div>
              
            </div>

            <div className="col-6">
              <div className="typewriter-about">{text}</div>

              <div className="techstack2 row container pt-5 text-center">
                <h5 className="text-center techstack">Technology Stack</h5>


                <div className="techstack-icons text-center">
                  <FontAwesomeIcon className="techstack-icons" icon={faHtml5} />
                  <FontAwesomeIcon className="techstack-icons" icon={faCss3} />
                  <FontAwesomeIcon className="techstack-icons" icon={faJs} />
                  <FontAwesomeIcon className="techstack-icons" icon={faPhp} />
                  <FontAwesomeIcon
                    className="techstack-icons"
                    icon={faLaravel}
                  />
                  <FontAwesomeIcon
                    className="techstack-icons"
                    icon={faBootstrap}
                  />
                  <FontAwesomeIcon className="techstack-icons" icon={faReact} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
