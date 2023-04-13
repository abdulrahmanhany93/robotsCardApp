import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { robotsData } from "../constants/robots";
import SearchBar from "../components/Search_Bar";
import "../styles/App.css";
function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setsearchField] = useState("");
  const onSearchChange = (event) => {
    setsearchField(event.target.value);
  };
  useEffect(() => setRobots(robotsData), []);
  const filteredRobots = robots.filter((robot) => {
    return robot.username.toLowerCase().includes(searchField.toLowerCase());
  });
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBar onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
