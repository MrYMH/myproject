import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Game = ({MyChoice, score, setscore}) =>{
    const [playerWin , setplayerWin]= useState('');
    const [House , setHouse]= useState('');
    const [Counter , setCounter]= useState(3);

    const newHousepick=()=>{
        const choices = ['rock', 'paper', 'scissors']
        setHouse(choices[Math.floor (Math.random()*3)])
    }
    useEffect(() =>{
        newHousepick();
    }, [])
    
    function Result()
    {
        if (MyChoice === 'rock' && House === 'scissors')
        {
            setplayerWin('win');
            setscore(score + 1);
        }
        else if (MyChoice === 'rock' && House === 'paper')
        {
            setplayerWin('lose');
            setscore(score - 1);
        }
        else if (MyChoice === 'scissors' && House === 'rock')
        {
            setplayerWin('lose');
            setscore(score - 1);
        }
        else if (MyChoice === 'scissors' && House === 'paper')
        {
            setplayerWin('win');
            setscore(score + 1);
        }
        else if (MyChoice === 'paper' && House === 'scissors')
        {
            setplayerWin('lose');
            setscore(score - 1);
        }
        else if (MyChoice === 'paper' && House === 'rock')
        {
            setplayerWin('win');
            setscore(score + 1);
        }
        else
        {
            setplayerWin('draw');
        }
    }
    useEffect(() =>{
        const timer= Counter>0 ? setInterval( () =>{
            setCounter(Counter-1)
        }, 1000) : Result();

        return() =>{
            clearInterval(timer);
        }
    }, [Counter,House])
    return(
        <div className='game'>
            <div className='game-you'>
                <span className='text'>you picked</span>
                <div className={`icon icon--${MyChoice} ${playerWin==='win'?`icon icon--${MyChoice}--winner`:''}`}></div>
            </div>
            {playerWin==='win' && <div className='game--play'>
                <span className='text'>you win</span>
                <Link className='play-again' to='/' onClick={()=> setHouse()}>
                    play again
                </Link>
            </div>}
            {playerWin==='draw' && <div className='game--play'>
                <span className='text'>draw</span>
                <Link className='play-again' to='/' onClick={()=> setHouse()}>
                    play again
                </Link>
            </div>}
            {playerWin==='lose' && <div className='game--play'>
                <span className='text'>you lose</span>
                <Link className='play-again' to='/' onClick={()=> setHouse()}>
                    play again
                </Link>
            </div>}
            <div className='game-house'>
                <span className='text'>the house picked</span>
                {
                    Counter === 0 ? <div className={`icon icon--${House} ${
                        playerWin==='lose'?`icon icon--${House}--winner`:''
                        }` }>
                    </div> : <div className='counter'>{Counter}</div>
                }
            </div>
        </div>
    )
}

export default Game;

