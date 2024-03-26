import React, {useEffect, useState} from 'react';
import './GameHistoryList.css';

import GameHistoryListItem from '../GameHistoryListItem/GameHistoryListItem.jsx';

export default function GameHistoryList(props){
  const [gamesList, setGamesList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/games')
      .then(response => response.json())
      .then(data => setGamesList(data))
      .catch(error => console.error(error));
  }, []);
  return(
    <div className='game__history__list'>
      {props.gamesList.map((game) => <GameHistoryListItem key={game.id} game={game} />)}
    </div>
  )
}