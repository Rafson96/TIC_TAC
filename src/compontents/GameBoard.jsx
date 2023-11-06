import { useState } from 'react'

const initialGameBord = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
]
export default function GameBoard({ onSelectSquare, turns, activePlayer }) {
	let gameBoard = initialGameBord
	console.log(gameBoard)
	console.log(initialGameBord)
	for (const turn of turns) {
		const { square, player } = turn
		const { row, col } = square

		gameBoard[row][col] = player
	
	}

	// function handleSelectSquare(rowIndex, colIndex) {
	// 	setGameBoard(prevGameBoard => {
	// 		const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol
	// 		return updatedBoard
	// 	})

	// 	onSelectSquare()
	// }

	return (
		<ol id='game-board'>
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						<ol>
							{row.map((playerSymbol, colIndex) => (
								<li key={colIndex}>
									<button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
								</li>
							))}
						</ol>
					</ol>
				</li>
			))}
		</ol>
	)
}
