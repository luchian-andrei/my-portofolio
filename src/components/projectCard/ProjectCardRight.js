import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCardRight({
  imageSrc,
  title,
  description,
  link,
}) {
  return (
    <div className="ProjectCardRight">
      <div className="project-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Visit the project</a>
      </div>
      <div className="project-image">
        <div className="image-dots">
          <FontAwesomeIcon
            icon={faCircle}
            style={{ color: "red", marginRight: "5px", marginBottom: "15px" }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            style={{
              color: "orange",
              marginRight: "5px",
              marginBottom: "15px",
            }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            style={{ color: "green", marginBottom: "15px" }}
          />
        </div>

        <img src={imageSrc} alt="nasa" id="projectRight-img" />
      </div>
    </div>
  );
}
