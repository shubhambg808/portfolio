import React from "react";
import "./About.css";

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

      <h1 style={{ color: "rgb(19, 245, 11)" }}>
        Some of My Projects Github links
      </h1>
      <section className="projects_list">
        <a
          href="https://github.com/shubhambg808/emoji-search.git"
          target="_blank"
        >
          <img
            className="pr_img"
            src="https://nypost.com/wp-content/uploads/sites/2/2023/03/emoji-comp.jpg?quality=75&strip=all&w=1024"
            alt=""
          />
          <br />
          Emoji Search
        </a>

        <a href="https://github.com/shubhambg808/thali_app.git" target="_blank">
          <img
            src="https://previews.123rf.com/images/yupiramos/yupiramos1711/yupiramos171106570/89528991-chef-with-tray-avatar-character-vector-illustration-design.jpg"
            className="pr_img"
            alt=""
          />
          <br />
          Thali App
        </a>

        <a href="https://github.com/shubhambg808/todo-app.git" target="_blank">
          <img
            src="https://photos5.appleinsider.com/gallery/53069-106276-000-lead-OmniFocus-xl.jpg"
            className="pr_img"
            alt=""
          />
          <br />
          Todo App
        </a>

        <a
          href="https://github.com/shubhambg808/5Assignment-loginfileupload.git"
          target="_blank"
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
            className="pr_img"
            alt=""
          />
          <br />
          Login & file upload
        </a>
      </section>
    </div>
  );
};

export default About;
