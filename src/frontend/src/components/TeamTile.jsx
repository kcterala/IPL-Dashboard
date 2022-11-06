import "./TeamTile.scss";
import { Link } from "react-router-dom";

function TeamTile(props) {
  return (
    <div className="team-tile">
      <h1>
        <Link to={`/teams/${props.teamName}`}>{props.teamName}</Link>
      </h1>
    </div>
  );
}

export default TeamTile;
