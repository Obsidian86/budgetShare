import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  user: faUser,
  plus: faPlusCircle
};

const Icon = ({ icon }) => <FontAwesomeIcon icon={iconMap[icon]} />;

export default Icon;
