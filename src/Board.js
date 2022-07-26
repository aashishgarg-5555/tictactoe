import React , {useState} from 'react'
import './Board.css';
import Square from './Square';

function Board() {
  
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [next,setNext] = useState(true);
  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    const win= Boolean(calculateWinner(squares));
    if(newSquares[i] || win)
    {
      return;
    } 
      newSquares[i]=next ? "X" : "O";
      setNext(!next);
    setSquares(newSquares);
  }
    
  function calculateWinner(squares){
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]
    for(let line of lines) {
      const [a, b, c] = line;
      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  
  const winner = calculateWinner(squares);
  const status = winner ?  `winner : ${winner}` : `Player Turn: ${next ? "X" : "O"}`;
  
  return (
    <div className='board'>
        Tic-Tac-Toe
        <div className='status'> 
          {status}
        </div>
        <div className='box'>
          <div className='setup'>
            <Square value={squares[0]} onClickEvent={()=>handleClickEvent(0)}></Square>
            <Square value={squares[1]} onClickEvent={()=>handleClickEvent(1)}></Square>
            <Square value={squares[2]} onClickEvent={()=>handleClickEvent(2)}></Square>
          </div>
          <div className='setup'>
            <Square value={squares[3]} onClickEvent={()=>handleClickEvent(3)}></Square>
            <Square value={squares[4]} onClickEvent={()=>handleClickEvent(4)}></Square>
            <Square value={squares[5]} onClickEvent={()=>handleClickEvent(5)}></Square>
          </div>
          <div className='setup'>
            <Square value={squares[6]} onClickEvent={()=>handleClickEvent(6)}></Square>
            <Square value={squares[7]} onClickEvent={()=>handleClickEvent(7)}></Square>
            <Square value={squares[8]} onClickEvent={()=>handleClickEvent(8)}></Square>
          </div>
        </div>
        <button className='btn' onClick={()=>setSquares(initialSquares)}>RESTART GAME</button>
    </div>
  )
}

export default Board