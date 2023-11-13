import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  user: faUser,
  plus: faPlusCircle,
  close: faTimes,
};

const Icon = ({ icon }) => <FontAwesomeIcon icon={iconMap[icon]} />;

export default Icon;
