import { useState } from 'react'

export default function Player({ initialName, symbol, isActive }) {
	const [playerName, setPlayerName] = useState(initialName)
	const [isEditing, setIsEditing] = useState(false)

	function handleEditClick() {
		setIsEditing(prevState => !prevState)
	}

	function handleChange(event) {

		let name = event.target.value
		setPlayerName(name)
	}

	let editablePlayerName = <span className='player-name'>{playerName}</span>
	let btnCaption = 'Edit'

	if (isEditing) {
		editablePlayerName = <input onChange={handleChange} value={playerName} type='text' required></input>
		btnCaption = 'Save'
	}

	return (
		<li className={isActive ? 'active': undefined}>
			<span className='player'>
				{editablePlayerName}

				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	)
}
