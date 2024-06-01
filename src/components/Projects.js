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
      <ProjectCardRight
        imageSrc="./images/expense-app.png"
        title="Expense App"
        description="Expense app with a dummy initial balance that increase or decrease depending on the registered transactions. Has a invalid login form, an error 404 page and you can select light or dark mode. Was styled using Tailwind CSS"
        link="https://luchian-andrei.github.io/expense-app/"
      />
      <ProjectCardLeft
        imageSrc="./images/theDiv.png"
        title="TheDiv"
        description="This project gives you a div and some of the most-known CSS properties to choose from. The purpose of this project is to see how the div reacts to the properties so you can better understand the process of styling the elements using CSS."
        link="https://luchian-andrei.github.io/the-div/"
      />
      <ProjectCardRight
        imageSrc="./images/currencyConverter.png"
        title="Currency Converter"
        description="Currency converter where you can choose between some of the most popular currency at the moment. You can also choose the language. When the required fields are not completed you will be notified. Enjoy !"
        link="https://luchian-andrei.github.io/currency-converter/"
      />
      <ProjectCardLeft
        imageSrc="./images/weather-app-updated.png"
        title="Weather App 2.0."
        description="An update to the old weather app. Added alerts on some actions, added the favorites section (made using local storage) and made a new desing. I will let the old app here for the comparison. Enjoy !"
        link="https://luchian-andrei.github.io/weather-updated/"
      />
    </div>
  );
}
