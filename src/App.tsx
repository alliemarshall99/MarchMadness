import React from 'react';
import logo from './logo.svg';
import './App.css';

import collegeBasketballTeams from './CollegeBasketballTeams.json';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function MarchMadnessHeading() {
  return (
    <div>
      <h1>Welcome to March Madness!</h1>
      <h3>Learn more about your favorite teams!</h3>
    </div>
  );
}

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
