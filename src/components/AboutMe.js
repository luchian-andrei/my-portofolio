import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBugSlash,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="AboutMe "
      id="about-me"
    >
      <div className="intro">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
        >
          <FontAwesomeIcon
            icon={faCode}
            style={{ marginRight: "10px", color: "green", fontSize: "20px" }}
          />
          I`m Andrei, a young guy passionate about Tech industry, about creating
          things and about improving myself in all of my interest areas.{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: false }}
        >
          <FontAwesomeIcon
            icon={faBugSlash}
            style={{ marginRight: "10px", color: "red", fontSize: "20px" }}
          />
          I like keeping myself busy with drinking coffee, writing code and
          deepen my knowledge in IT domain. In my free time I usually make
          myself more coffee and write more code.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          viewport={{ once: false }}
        >
          <FontAwesomeIcon
            icon={faShieldHalved}
            style={{ marginRight: "10px", color: "gray", fontSize: "20px" }}
          />
          I`m very ambitious, serious and you can trust me with any task or
          project.{" "}
        </motion.p>
      </div>
      <div className="aboutme-image">
        <img src="./images/me1.jpg" alt="me" id="aboutme-img" />
        <p>
          That`s how I look <span id="img-span">( on a good day )</span>{" "}
        </p>
      </div>
    </motion.div>
  );
}
