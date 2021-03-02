import React, { useState } from "react";
import {
	Container,
	InnerContainer,
	QuizzHeading,
	SelectSection,
	StartBtnContainer,
} from "./QuizStyle";

// IMPORTING MATERIAL UI
import { FormControl, Select, MenuItem, Button } from "@material-ui/core";
import Quiz from "./Quiz";

// IMPORTING CONTEXT
import { GlobalContext } from "./createContext";

// TYPE OF TYPE DATA
type Type = {
	value: string;
	type: string;
};

const SelectData: React.FC = () => {
	const Quantity: number[] = [5, 10, 15, 20, 30, 40, 50];
	const Type: Type[] = [
		{
			value: "easy",
			type: "EASY",
		},
		{
			value: "medium",
			type: "MEDIUM",
		},
		{
			value: "hard",
			type: "HARD",
		},
	];

	// STATS
	let [questionType, setQuestionType] = useState<string>("easy");
	let [totalQuestions, setTotalQuestions] = useState<number>(5);
	const [quizRender, setQuizRender] = useState(false);

	const startEvent = () => {
		setQuizRender(!quizRender);
	};

	const playAgain = () => {
		setQuizRender(!quizRender);
	};

	return (
		<GlobalContext.Provider value={playAgain}>
			{quizRender ? (
				<Quiz QType={questionType} TQuestions={totalQuestions} />
			) : (
				<Container>
					<InnerContainer>
						<QuizzHeading>QUIZ</QuizzHeading>
						<SelectSection>
							<FormControl>
								<Select
									style={{ width: "150px", height: "40px" }}
									variant="outlined"
									value={questionType}
									onChange={(e: any) => {
										setQuestionType(e.target.value);
									}}
								>
									{Type.map((preVal) => {
										const { value, type } = preVal;
										return (
											<MenuItem key={value} value={value}>
												{type}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
							<FormControl>
								<Select
									style={{ width: "150px", height: "40px" }}
									variant="outlined"
									value={totalQuestions}
									onChange={(e: any) => setTotalQuestions(e.target.value)}
								>
									{Quantity.map((preVal) => {
										return (
											<MenuItem key={preVal} value={preVal}>
												{preVal}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
						</SelectSection>
						<StartBtnContainer>
							<Button
								variant="contained"
								style={{ background: "#ced373" }}
								onClick={startEvent}
							>
								Start
							</Button>
						</StartBtnContainer>
					</InnerContainer>
				</Container>
			)}
		</GlobalContext.Provider>
	);
};

export default SelectData;
