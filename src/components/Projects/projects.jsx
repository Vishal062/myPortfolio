import React from "react";

import Button from "react-bootstrap/Button";
import sample from "../../images/projects/Internshala.png";
import sample1 from "../../images/projects/Nutrify.png";
// import sample2 from "../../images/projects/dineout.mp4";
// import sample3 from "../../images/projects/livechat.mp4";
import "./projects.styles.css";

const TimeLine = () => {
  return (
    <>
      <h1 className=" text-center font-details headingTop1">PROJECTS</h1><br/>
      <div className="container1" id="projects">
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <h1>INTERNSHALA CLONE</h1>
                <div style={{ width: "fit-content" }}>
                  {/* <video className="videoTag" autoPlay loop muted controls> */}
                    <img className="videoTag" alt="Internshala" src={sample} type="Image/png" />
                  {/* </video> */}
                </div>
                <p>
                This is a clone of the Internshala website. We built this as part of the construct week project at Masai School. 
                This clone is built in vanilla javascript, html, css with backend. This was a collaborative one built as a construct 
                week project along with three more developers.My role is creating Home page design and outlay,Internship details page with 
                file uploading functionality(Resume). 
                </p>
                <div>
                  <a
                    href="https://github.com/Vishal062/Backend-Internshala"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                    
                  </a>
                  <a
                    href="https://blooming-bastion-29120.herokuapp.com/pages/index.ejs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Live Demo
                    </Button>
                    
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>NUTRIFY APP</h1>
                <div style={{ width: "fit-content" }}>
                  {/* <video className="videoTag" autoPlay loop muted controls> */}
                  <img className="videoTag" alt="Nutrify" src={sample1} type="Image/png" />
                  {/* </video> */}
                </div>
                <p>
                Nutrify mainly gives information about the health condition of the user along with proper result 
                in form of a report and also suggest different nutritious food items in order improve the user-health 
                condition.This was a collaborative one built as a construct week project along with two more developers.
                My role is completed Home page component using react connect data with backend.
                </p>
                <div>
                  <a
                    href="https://github.com/Vishal062/Nutrify-Unit-4-Project-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                  <a
                    href="https://nutrifyunit4.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </li>
            {/* <li>
              <div className="timeline-content">
                <h1>GOOGLE MEET CLONE</h1>
                <div style={{ width: "fit-content" }}>
                  <video className="videoTag" autoPlay loop muted controls>
                    <source src={sample} type="video/mp4" />
                  </video>
                </div>
                <p>
                  Google Meet Clone is a simple one-one calling.It also got
                  couple of features like text messagging from one person to
                  another,screen sharing and simply calling functionality.This
                  was done by taking reference from youtube.
                </p>
                <div>
                  <a
                    href="https://github.com/GopiChandana/Google-Meet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </li> */}
            {/* <li>
              <div className="timeline-content">
                <h1>LIVE CHAT</h1>
                <div style={{ width: "fit-content" }}>
                  <video className="videoTag" autoPlay loop muted controls>
                    <source src={sample3} type="video/mp4" />
                  </video>
                </div>
                <p>
                  A Live chat application where we can chat with our friends in
                  private rooms in real-time.
                </p>
                <div>
                  <a
                    href="https://github.com/GopiChandana/chat_application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div><br/>
    </>
  );
};

export default TimeLine;
