import React from "react";
import { Link } from "react-router-dom";
import "./YearSelector.scss";

export default function YearSelector(props) {
  let years = [];
  const startYear = import.meta.env.VITE_START_YEAR;

  const endYear = import.meta.env.VITE_END_YEAR;

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <ol className="years-list">
      {years.map((year) => (
        <li key={year}>
          <Link to={`/teams/${props.teamName}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </ol>
  );
}
