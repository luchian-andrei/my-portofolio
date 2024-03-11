import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-title">
        <h1>That`s all folks</h1>
        <h4>Come back soon to check the updates</h4>
      </div>

      <div className="contact" id="contact">
        <p>If you wanna reach to me you can do it by:</p>
        <p>
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#354649", marginRight: "10px" }}
          />
          - 0760 791 862
        </p>
        <p>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#354649", marginRight: "10px" }}
          />
          - luchianandrei25@yahoo.com
        </p>
      </div>
      <div className="cv">
        <p>If you wanna find more about me you can do it by visiting my:</p>

        <a
          href="https://www.linkedin.com/in/andrei-luchian-b73a69251/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "blue", marginRight: "10px", fontSize: "30px" }}
          />
        </a>

        <a
          href="https://www.instagram.com/luchian.andreii/?next=%2F"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "magenta", marginRight: "10px", fontSize: "30px" }}
          />
        </a>
        <a
          href="https://github.com/luchian-andrei"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "black", marginRight: "10px", fontSize: "30px" }}
          />
        </a>
      </div>
    </div>
  );
}
