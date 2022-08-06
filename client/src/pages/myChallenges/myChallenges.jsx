import "./myChallenges.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function MyChallenges() {
  return (
    <div class="sidebar">
      <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
      <button class="sidebar-toggle"><i class="fa fa-plus icon"></i></button>
    </div>
  );
}