import React, { useState } from 'react';
import './App.css';

function App() {

  const [playerScore, setPlayerScore] = useState([
    {homeScore: "", awayScore: "" },
  ]);

  // const handleScoreSave = e => {
  //   setPlayerScore({
  //     homeScore: e.target.value,
  //     awayScore: e.target.value
  //   })
  // };

  const handleChangeScore = (index, e) => {
    const value = [...playerScore];
    value[index][e.target.name] = e.target.value;
    setPlayerScore(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("playerScore", playerScore);
  };

  const handleAddPlayer = () => {
    setPlayerScore([...playerScore, { homeScore:"", awayScore: ""}])
  };

  const handleRemovePlayer = (index) => {
    const array = [...playerScore];
    array.splice(index, 1);
    setPlayerScore(array);
  }

  return (
    <div className="App">
      <header>
        <h1>Ten's in</h1>
        <h2>HOME vs AWAY</h2>
        <button 
          type="submit"
          name="addPlayer"
          value="submit"
          onClick={() => handleAddPlayer()}
        >Add Player</button>
      </header>
      <div className="playerContainer">
        <form onSubmit={handleSubmit}>
          { playerScore.map((playerScore, index) => (
            <div key={index}>
              <input
                type="text"
                name="homeScore"
                value={playerScore.homeScore}
                onChange={e => handleChangeScore(index, e)}
              />
              <input
                type="text"
                name="awayScore"
                value={playerScore.awayScore}
                onChange={e => handleChangeScore(index, e)}
              />
              <button onClick={() => handleRemovePlayer(index)}>x</button>
            </div>
          )) }
          <button type="submit" onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
