import useWordGame from './Hooks/useWordGame';

function App() {
	const {
		textBoxRef,
		handleChange,
		text,
		isTimeRunning,
		timeRemaining,
		startGame,
		wordCount,
	} = useWordGame(60);

	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea
				ref={textBoxRef}
				onChange={handleChange}
				value={text}
				disabled={!isTimeRunning}
			/>
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={startGame} disabled={isTimeRunning}>
				Start
			</button>
			<h1>Word count: {wordCount}</h1>

			<p className='coding_show'>
				&copy; Copyright{' '}
				<a href='https://t.me/coding_show' target='_blank'>
					Coding Show
				</a>
			</p>
		</div>
	);
}

export default App;
