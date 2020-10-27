import React, { useState, useEffect } from "react";
// import Alert from "../../components/widgets/Alert/alert.component";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./about.styles.scss";

const profilePic = require("./profile_pic.png");

function About() {
  const data = [
    {
      name: "Yash Pandya",
      role: "Developer",
      github: "https://github.com/yash1094/",
      twitter: "https://twitter.com/YoshiBot1094",
      linkedin: "https://www.linkedin.com/in/yash-pandya-8624b4a8/",
    },
    {
      name: "Jason Huang",
      role: "Developer",
      github: "https://github.com/JayTLH",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/jason-tlh/",
    },
    {
      name: "Joshua Nascimento",
      role: "Developer",
      github: "https://github.com/JoshuaNascimento",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/joshua-nascimento/",
    },
    {
      name: "Fahim ...",
      role: "Developer",
      github: "",
      twitter: "",
      linkedin: "",
    },
    {
      name: "Sagna Lee",
      role: "Marketing",
      github: "",
      twitter: "",
      linkedin:
        "https://www.linkedin.com/in/sanga-l-2a2b11174/?msgControlName=reply_to_sender&msgConversationId=6726497172298235904&msgOverlay=true",
    },
  ];

  const [style, setStyle] = useState("");

  useEffect((c) => setStyle("card-container"), [profilePic]);

  return (
    <div className="about">
      <h1>About</h1>
      <div className="info">
        <h3>Mission Statement:</h3>
        <h5>
          Our mission statement is to help people attain their favorite
          products, during these trying times, while reducing the risk of
          exposure to COVID-19
        </h5>
      </div>
      <div className="info">
        <h3>Company Vision:</h3>
        <h5>
          At SmartQ, we envision a world where consumers are able to shop freely
          without the hassle of waiting in a physical line. They will be able to
          open our app, queue, and will be notified when their time has come to
          enter the store. This allows them to have a more seamless shopping
          experience, enabling them to have more time for the more important
          tasks.
        </h5>
      </div>

      <h2>Our Team</h2>
      <div className="cards">
        {data.map((d) => {
          return (
            <div className={style} key={d.name}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={profilePic} />
                <Card.Body>
                  <Card.Title>{d.name}</Card.Title>
                  <Card.Text>{d.role}</Card.Text>
                  <div className="icons">
                    {d.github != "" ? (
                      <Button href={d.github} target="_blank">
                        <i class="fa fa-github" aria-hidden="true"></i>
                      </Button>
                    ) : null}
                    {d.twitter != "" ? (
                      <Button href={d.twitter} target="_blank">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </Button>
                    ) : null}
                    {d.linkedin != "" ? (
                      <Button href={d.linkedin} target="_blank">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </Button>
                    ) : null}
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>

      {/* <Alert /> */}
    </div>
  );
}

export default About;
