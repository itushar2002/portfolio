import React from "react";
import project_Image1 from "../assets/STREAMIFY_PROJECT.png";
import project_Image2 from "../assets/Pinterest_project.png";
import project_Image3 from "../assets/Project-3.png";
const Project = () => {
  return (
    <div className="project">
      <div className="project-header">
        <h1>Project</h1>
        <hr />
        <h5>
          Here you will find some of the personal that I created with each
          project containing its live Preview
        </h5>
      </div>
      <div className="project-display">
        <div className="card">
          <img src={project_Image1} alt="" />
        </div>
        <div className="dets">
          <h4>
            Developed a feature-rich video streaming platform using React.js,
          </h4>
          <p>
            •Implemented React Router DOM to ensure smooth transitions between
            pages, enhancing user experience.
          </p>
          <p>
            •Integrated YouTube API v3 to dynamically fetch and display a vast
            array of video content.
          </p>
          <p>
            •Ensured responsiveness and cross-device compatibility by employing
            React.js flexible design principles.
          </p>
          <div className="link">
            <a href="https://streamify-bay.vercel.app/">Website Preview</a>
            <a href="https://github.com/itushar2002/Streamify.git">Github</a>
          </div>
        </div>
      </div>
      <div className="project-display">
        <div className="card">
          <img src={project_Image2} alt="" />
        </div>
        <div className="dets">
          <h4>Created a fully functional replica of Pinterest.</h4>
          <p>
            • Node.js & Express: Utilize Node.js and Express.js for backend
            development, handling routes, requests, and responses.
          </p>
          <p>• MongoDB: Store user data,posts in a MongoDB database</p>
          <p>
            • Passport.js & Multer: Implement Passport.js for user
            authentication, for secure login and registration. Multer is used
            for handling file uploads
          </p>
          <div className="link">
            <a href="https://www.linkedin.com/posts/tushar-jha-6a2b2a249_hey-connections-i-am-excited-activity-7148175518209658880-2Hj_?utm_source=share&utm_medium=member_desktop">
              Website Preview
            </a>
            <a href="https://github.com/itushar2002/Streamify.git">Github</a>
          </div>
        </div>
      </div>
      <div className="project-display">
        <div className="card">
          <img src={project_Image3} alt="" />
        </div>
        <div className="dets">
          <h4>Frontend development of Sundown studio clone</h4>
          <p>
            •HTML & CSS: Structure the website using HTML for content and CSS
            for styling, ensuring responsiveness across devices.
          </p>
          <p>
            •JavaScript: Enhance functionality with JavaScript, enabling dynamic
            features such as image sliders and interactive elements.
          </p>
          <p>
            •Locomotive.js: Implement smooth scrolling and page transitions
            using Locomotive.js, providing a seamless browsing experience.
          </p>
          <div className="link">
            <a href="https://itushar2002.github.io/sundown-website-clone/">
              Website Preview
            </a>
            <a href="https://github.com/itushar2002/sundown-website-clone.git">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
