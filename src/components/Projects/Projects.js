import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webbotpro from "../../Assets/Projects/webbotpro.png";
import webbotprosite from "../../Assets/Projects/webbotpro-site.png";
import bangestore from "../../Assets/Projects/bangestore.png";
import jersey from "../../Assets/Projects/jersey.png";
import resume from "../../Assets/Projects/resume.png";
import Byte0fFinance from "../../Assets/Projects/blogs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webbotpro}
              isBlog={false}
              title="Webbotpro"
              description="WebbotPro is a cutting-edge platform empowering businesses with intelligent automation and digital solutions. It offers seamless integration with Shopify, advanced analytics, and scalable performance. Built with Next.js, Node.js, and Shopify API for efficient, high-performance deployment. The platform streamlines e-commerce tasks with automated."
              ghLink="https://webbotpro.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webbotprosite}
              isBlog={false}
              title="Webbotpro Site"
              description="WebBotPro is a modern digital solutions platform that integrates React.js and Midtrans Payment Gateway (Indonesia), empowering businesses to scale online. With a focus on automation, digital marketing, payment solutions, and business intelligence, it provides an all-in-one toolkit for SMEs and enterprises to grow faster and more efficiently."
              ghLink="https://webbotpro.site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bangestore}
              isBlog={false}
              title="E-Commerce Bags & Luggage"
              description="Bangestore is an online e-commerce platform specializing in high-quality imported bags, offering seamless buying and selling features. It supports worldwide shipping with multiple payment options, including PayPal, Credit Card, USDT, and Local Bank Transfer. The platform is powered by WordPress for efficient content management and e-commerce functionality."
              ghLink="https://bangestore.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jersey}
              isBlog={false}
              title="E-Commerce Custom Jersey"
              description="Jerseysports.id is an online e-commerce platform specializing in high-quality custom sports jerseys, offering seamless browsing and ordering features. It supports worldwide shipping with Local Bank Transfer. The platform is powered by WordPress for efficient content management and e-commerce functionality across multiple sports categories."
              ghLink="https://jerseysports.id"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Yusup Resume"
              description="I am looking to apply for a remote position, leveraging over 13 years of experience in project delivery and maintenance within the telecommunications industry. I am confident in my ability to meet the qualifications required for this role. This portfolio resume is built using GitHub, HTML, and CSS in web development and attention to detail."
              ghLink="https://imyusup.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Byte0fFinance}
              isBlog={false}
              title="Byte-0f-Finance"
              description="Byte-0f-Finance is a blog platform focused on educating readers about smart saving and investing in key digital assets such as gold, stocks, and crypto. Articles are written in clean, interactive markdown format, offering an informative and engaging experience for anyone interested in personal finance, asset growth, and financial literacy."
              ghLink="https://imyusupblogs.vercel.app"
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
