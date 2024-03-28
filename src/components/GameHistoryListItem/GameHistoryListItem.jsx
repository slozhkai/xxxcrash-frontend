import React from 'react';
import './GameHistoryListItem.css';
function GameHistoryListItem(props){

  return(
    <div className='game__history__item'>
      <div className='game__history__item__picture__container'>
        <img src={props.picture} alt={props.game.name} className='game__history__item__picture'/>
      </div>
      <div className='game__history__item__info__container'>
        <div className='game__history__item__info__bet'>{props.game.bet}</div>
        <div className='game__history__item__info__result'>
          {!props.game.crash && (

              <div className='game__history__item__info__win'>{props.game.ЗАНОС}</div>
          )}
          {props.game.crash && (
              <>
                <div className='game__history__item__info__lose'>CRASH</div>
                <img src={'...'} alt='crash' className='game__history__item__info__crash-picture'/>
              </>
          )}
        </div>
    </div>
    </div>
  )
}

export default GameHistoryListItem;