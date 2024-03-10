import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="Welcome" id="welcome">
      <div className="welcome-title">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          {" "}
          <Typewriter
            words={[
              " Hola !",
              "  Salut !",
              " Hello !",
              " Bonjour !",
              " Ciao !",
            ]}
            loop={20}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={100}
          />
        </motion.h1>

        <h2>...and welcome to my personal portofolio </h2>
      </div>
      <div className="welcome-intro">
        <h4>
          Below you will find some information about me and what I did so far
        </h4>
        <h2>Enjoy !</h2>
      </div>
    </div>
  );
}
