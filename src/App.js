import React, { useState } from 'react';
import './App.css';

function App() {

  const [playerCard, setPlayerCard] = useState([{
    playerName: "", 
    homeScoreOne: "", 
    awayScoreOne: "",
    minuteScoreOne: "",
    homeScoreTwo: "", 
    awayScoreTwo: "",
    minuteScoreTwo: "",
    homeScoreThree: "", 
    awayScoreThree: "",
    minuteScoreThree: "",
    isEditing: true,
  },
  ]);

  const handleEditPlayerCard = (index, e) => {
    const value = [...playerCard];
    value[index][e.target.name] = e.target.value;
    setPlayerCard(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddPlayer = () => {
    setPlayerCard([...playerCard, {
      playerName: "", 
      homeScoreOne: "", 
      awayScoreOne: "",
      minuteScoreOne: "",
      homeScoreTwo: "", 
      awayScoreTwo: "",
      minuteScoreTwo: "",
      homeScoreThree: "", 
      awayScoreThree: "",
      minuteScoreThree: "",
      isEditing: true,
  }])
  };

  const handleRemovePlayer = (index) => {
    const array = [...playerCard];
    array.splice(index, 1);
    setPlayerCard(array);
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
          { playerCard.map((playerCard, index) => (
            <div key={index}>
              <table>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>
                      <p>Home</p>
                    </td>
                    <td>
                      <p>Away</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input 
                        type="text"
                        name="playerName"
                        value={playerCard.playerName}
                        placeholder="Player Name"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="homeScoreOne"
                        value={playerCard.homeScoreOne}
                        placeholder="Home"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="awayScoreOne"
                        value={playerCard.awayScoreOne}
                        placeholder="Away"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="minuteScoreOne"
                        value={playerCard.minuteScoreOne}
                        placeholder="Minute of Last Goal/Card"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input 
                        type="checkbox"
                        name="home"
                      />
                    </td>
                    <td>
                      <input 
                        type="checkbox"
                        name="away"
                      />
                    </td>
                    <td>
                      <button type="submit" onClick={handleSubmit}>Save</button>
                      <button onClick={() => handleRemovePlayer(index)}>x</button>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>
                      <input
                        type="text"
                        name="homeScoreTwo"
                        value={playerCard.homeScoreTwo}
                        placeholder="Home"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="awayScoreTwo"
                        value={playerCard.awayScoreTwo}
                        placeholder="Away"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="minuteScoreTwo"
                        value={playerCard.minuteScoreTwo}
                        placeholder="Minute of Last Goal/Card"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input 
                        type="checkbox"
                        name="home"
                      />
                    </td>
                    <td>
                      <input 
                        type="checkbox"
                        name="away"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>
                      <input
                        type="text"
                        name="homeScoreThree"
                        value={playerCard.homeScoreThree}
                        placeholder="Home"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="awayScoreThree"
                        value={playerCard.awayScoreThree}
                        placeholder="Away"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="minuteScoreThree"
                        value={playerCard.minuteScoreThree}
                        placeholder="Minute of Last Goal/Card"
                        onChange={e => handleEditPlayerCard(index, e)}
                      />
                    </td>
                    <td>
                      <input 
                        type="checkbox"
                        name="home"
                      />
                    </td>
                    <td>
                      <input 
                        type="checkbox"
                        name="away"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )) }
        </form>
      </div>
    </div>
  );
}

export default App;
