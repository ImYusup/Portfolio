import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yusup Juniadi </span>
            from <span className="purple"> Bandung, Indonesia.</span>
            <br />
            I am currently freelancer as a software developer.
            <br />
            I have completed DIV/Bachelor Degree in Telecommunication Engineering at Polytechnic State of Bandung.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Quality Time with Family
            </li>
             <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
             <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(0 117 167)" }}>
            "Pursue Creating Things That Leave a Mark!"{" "}
          </p>
          <footer className="blockquote-footer">Yusup</footer>
        </blockquote>
      </Card.Body>
    </Card >
  );
}

export default AboutCard;