import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			img: 'images/staff_a.jpg',
			answerOptions: [
				{ answerText: 'A', isCorrect: true },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: false },
			],
		},
		{
			img: 'images/staff_b.jpg',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'B', isCorrect: true },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: false },
			],
		},
		{
			img: 'images/staff_c.jpg',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: true },
				{ answerText: 'D', isCorrect: false },
			],
		},
		{
			img: 'images/staff_d.jpg',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect === true) {
			setScore(score + 1)
		}

		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div>
						<div className='center'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div><img src={questions[currentQuestion].img} className="center"></img></div>
					</div>
					<div className='center'>
						{questions[currentQuestion].answerOptions.map((answerOption) => 
						<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} className="buttons">{answerOption.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}
