import { Children, useState } from 'react'
import Player from './compontents/Player'
import GameBoard from './compontents/GameBoard'
import Log from './compontents/Log'

function App() {
	const [gameTurns, setGameTurns] = useState([])
	const [activePlayer, setActivePlayer] = useState('X')

	function handleSelectSquare(rowIndex, colIndex) {
		setActivePlayer(prevState => (prevState === 'X' ? 'O' : 'X'))
		setGameTurns(prevTurns => { 
			let currentPlayer = 'X'
			if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
				currentPlayer = 'O'
		
			}
			const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer}, ...prevTurns]
			
		
			return updatedTurns
		})

	}
	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}></Player>
					<Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}></Player>
				</ol>
				<GameBoard activePlayer= {activePlayer} turns ={gameTurns} onSelectSquare={handleSelectSquare} ></GameBoard>
			</div>
			<Log></Log>
		</main>
	)
}

export default App
