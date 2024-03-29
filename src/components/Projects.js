import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3Alt,
  faJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import ProjectCardLeft from "./projectCard/ProjectCardLeft";
import ProjectCardRight from "./projectCard/ProjectCardRight";

export default function Projects() {
  return (
    <div className="Projects hidden" id="projects">
      <h2>I have good knowledge in:</h2>
      <div className="technologies">
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ color: "orange", fontSize: "40px", marginRight: "10px" }}
            />{" "}
            HTML{" "}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCss3Alt}
              style={{ color: "blue", fontSize: "40px", marginRight: "10px" }}
            />
            CSS
          </li>
          <li>
            <FontAwesomeIcon
              icon={faJs}
              style={{ color: "orange", fontSize: "40px", marginRight: "10px" }}
            />
            JavaScript
          </li>
        </ul>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "blue", fontSize: "40px", marginRight: "10px" }}
            />
            React
          </li>
          <li>
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "blue", fontSize: "40px", marginRight: "10px" }}
            />
            React Native
          </li>
          <li>
            <FontAwesomeIcon
              icon={faBootstrap}
              style={{
                color: "rgb(197, 65, 197)",
                fontSize: "40px",
                marginRight: "10px",
              }}
            />
            Boostrap
          </li>
        </ul>
      </div>

      <ProjectCardLeft
        imageSrc="./images/to-do-app.png"
        title="To Do List"
        description="An app where you can write the task you have to complete in a day. After you did what you had to do you can mark the task as complete and even delete it."
        link="https://luchian-andrei.github.io/todo-list/"
      />
      <ProjectCardRight
        imageSrc="./images/quiz-app.png"
        title="Quiz App"
        description="Short Quiz App containing 5 question. First step is to enter your name and start the quiz. During the quiz you can`t pass a question without giving an answer. In the end you will get your score and an unique message based on it."
        link="https://luchian-andrei.github.io/quiz-app/"
      />
      <ProjectCardLeft
        imageSrc="./images/weather-app.png"
        title="Weather App"
        description="Weather App that gives you details such as Temperature, Wind Speed, Minimum and Maximum Temp. during the day and many more. Be careful to enter a valid city name."
        link="https://luchian-andrei.github.io/weather-app/"
      />
    </div>
  );
}
