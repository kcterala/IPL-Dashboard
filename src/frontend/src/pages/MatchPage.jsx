import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import YearSelector from "../components/YearSelector";
import { useEffect } from "react";
import "./MatchPage.scss";

function MatchPage() {
  const { teamName, year } = useParams();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_ROOT_URL
        }/team/${teamName}/matches/?year=${year}`
      );

      const data = await response.json();
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]);

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3>Select Year</h3>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <div className="header">
          <h1 className="page-heading">
            {teamName} matches in {year}
          </h1>
          <button>
            <Link to={"/"}>
              <h4 className="button-name">Home</h4>
            </Link>
          </button>
        </div>
        {matches.length != 0 ? (
          matches.map((match) => (
            <MatchDetailCard key={match.id} teamName={teamName} match={match} />
          ))
        ) : (
          <div className="no-matches">
            <h1 className="message">Uh oh, Team didn't play in this year</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default MatchPage;
