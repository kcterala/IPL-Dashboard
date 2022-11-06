import { React, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import { useEffect } from "react";
import "./TeamPage.scss";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

function TeamPage() {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();
  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_ROOT_URL}/team/${teamName}`
      );

      const data = await response.json();
      setTeam(data);
    };
    fetchMatches();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss">
        Wins / Losses
        <PieChart
          data={[
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#a34d5d",
            },
            { title: "Wins", value: team.totalWins, color: "#4da375" },
          ]}
        />
      </div>
      <div className="match-detail">
        <h2>Latest Match</h2>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>

      {team.matches.slice(1).map((match) => (
        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
      ))}

      <div className="more-link">
        <Link
          to={`/teams/${teamName}/matches/${import.meta.env.VITE_END_YEAR}`}
        >
          More {`>`}
        </Link>
      </div>
    </div>
  );
}

export default TeamPage;
