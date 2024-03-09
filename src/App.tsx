//Allie Marshall Section 3 IS413

import React from 'react';
import logo from './logo.svg';
import './App.css';

//import in the json file
import collegeBasketballTeams from './CollegeBasketballTeams.json';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

//function to add heading at what the site will do
function MarchMadnessHeading() {
  return (
    <div>
      <h1>Welcome to March Madness!</h1>
      <h3>Learn more about your favorite teams!</h3>
    </div>
  );
}

//componet creates team card and displays info about each team
class TeamCard extends React.Component<{ team: Team }> {
  render() {
    const { school, name, city, state } = this.props.team;

    return (
      <div>
        <h1>{school}</h1>
        <h3>{name}</h3>
        <h3>{`${city}, ${state}`}</h3>
      </div>
    );
  }
}

//component displays a list of all the teams
class TeamList extends React.Component<{ teams: Team[] }> {
  render() {
    const { teams } = this.props;

    return (
      <div>
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MarchMadnessHeading />
      <TeamList teams={collegeBasketballTeams.teams} />
    </div>
  );
}

export default App;
