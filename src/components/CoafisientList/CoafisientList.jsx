import './CoafisientList.css';
import {useState} from "react";
import Coafiscient from "../Coaficient/Coaficient.jsx";

export default function CoafisientList() {
  const [gamesList] = useState([
    {id: 1, kf: 2.01},
    {id: 2, kf: 9.02},
    {id: 3, kf: 1.03},
    {id: 4, kf: 10.04},
    {id: 5, kf: 5.05},
    {id: 6, kf: 1.06},
    {id: 7, kf: 10.07},
    {id: 8, kf: 6.08},
    {id: 9, kf: 1.09},
    {id: 10, kf: 1.10},
    {id: 10, kf: 1.10},
  ])

  const coafList = gamesList.map((game) => <>
    <Coafiscient key={game.id} coaf={game.kf} />
  </>)

  // useEffect(() => {
  //   fetch('http://localhost:8080/games')
  //     .then(response => response.json())
  //     .then(data => setGamesList(data))
  //     .catch(error => console.error(error));
  // }, []);
  return (
    <div className={'coalist__container'} >
      {coafList}
    </div>
  )
}