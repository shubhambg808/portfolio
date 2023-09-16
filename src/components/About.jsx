import React from "react";

const About = () => {
  return (
    <div>
      <h1>
        "I have recently entered to the coding industry, making a transition
        from a non-IT background, . While my journey in the IT field is just
        beginning, I m excited to learn and grow in this dynamic industry . I
        bring a fresh perspective and a hunger for knowledge to every coding
        project I undertake. I am excited to embrace the opportunities, tackle
        the learning curve, and contribute my best.
      </h1>
      <br />

      <h1 style={{ color: "rgb(19, 245, 11)" }}>My Projects</h1>
      <section className="projects_list">
        <div className="project">
          <img
            src="https://nypost.com/wp-content/uploads/sites/2/2023/03/emoji-comp.jpg?quality=75&strip=all&w=1024"
            alt=""
          />
          <br />
          <a
            href="https://github.com/shubhambg808/emoji-search.git"
            target="_blank"
          >
            {" "}
            Emoji Search
          </a>
        </div>

        <a href="https://github.com/shubhambg808/thali_app.git" target="_blank">
          Thali App
        </a>

        <a href="https://github.com/shubhambg808/todo-app.git" target="_blank">
          Todo App
        </a>
      </section>
    </div>
  );
};

export default About;
