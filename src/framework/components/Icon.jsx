import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  user: faUser,
};

const Icon = ({ icon }) => <FontAwesomeIcon icon={iconMap[icon]} />;

export default Icon;
