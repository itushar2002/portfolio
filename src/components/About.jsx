import React from "react";
const About = () => {
  

  return (
    <div className="about">
      <div className="about-header">
        <h1>About Me</h1>
        <hr />
        <h5>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h5>
      </div>
      <div className="about-container">
        <div className="about-left">
          <h2>Welcome to my portfolio!</h2>
          <p>
            I'm a <span>MERN full stack developer</span> passionate about
            creating captivating user experiences. With a focus on frontend
            technologies, I combine the power of React.js with robust back-end
            solutions to craft cutting-edge web applications. From designing
            responsive layouts with <span>React.js</span> to architecting
            scalable server-side solutions with <span>Node.js</span> and{" "}
            <span>Express.js</span>, I push the boundaries of web development to
            deliver seamless experiences across devices.
          </p>
          <p>
            In my work, I prioritize clean code, scalability, and user-centric
            design. Whether I'm building responsive interfaces with{" "}
            <span>HTML, CSS, and JavaScript</span>, architecting robust
            server-side applications with frameworks like Node.js or optimizing
            databases for performance, I'm committed to delivering high-quality
            solutions that exceed expectations.
          </p>
          <p>
            Check out some of my work in the <span>Projects </span> section.
          </p>
        </div>
        <div className="about-right">
          <h2>Skills</h2>
          <div className="bubbles">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>TAILWIND CSS</h4>
            <h4>JAVASCRIPT</h4>
            <h4>REACT</h4>
            <h4>NODE</h4>
            <h4>EXPRESS</h4>
            <h4>MONGODB</h4>
            <h4>BOOTSTRAP</h4>
            <h4>REDUX</h4>
            <h4>Java</h4>
            <h4>Material UI</h4>
            <h4>RESPONSIVE DESIGN</h4>
            <h4>C programming</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
