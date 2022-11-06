import { Link } from "react-router-dom";
import "./MatchSmallCard.scss";

function MatchSmallCard(props) {
  const match = props.match;
  const otherTeam =
    props.match.team1 === props.teamName
      ? props.match.team2
      : props.match.team1;

  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = props.teamName === match.matchWinner;
  return (
    <div
      className={
        isMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"
      }
    >
      <span className="vs">vs</span>
      <h2>
        <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h2>
      <p className="match-result">
        {props.match.matchWinner} won by {props.match.resultMargin}{" "}
        {props.match.result}
      </p>
    </div>
  );
}

export default MatchSmallCard;
