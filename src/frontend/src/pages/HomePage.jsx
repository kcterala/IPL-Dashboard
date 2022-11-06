import { React, useState } from "react";
import { useEffect } from "react";
import "./TeamPage.scss";
import TeamTile from "../components/TeamTile";
import "./HomePage.scss";

function HomePage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_ROOT_URL}/team`);

      const data = await response.json();
      setTeams(data);
    };
    fetchTeams();
  }, []);

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
      </div>

      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile key={team.id} teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
