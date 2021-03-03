import React, { useState, useEffect } from "react";

// IMPORTING STYLED COMPONENTS
import {
	Container,
	InnerContainer,
	Question,
	OptionsContainer,
	Option,
	QuizzHeading,
	QuestionContainer,
} from "./QuizStyle";

import Button from "@material-ui/core/Button";

// IMPORTING LOADER
import Loader from "./Images/loader.gif";

// IMPORTING TYPES
import { QuestionType, quizProps } from "../Types/types";

// IMPORTING SERVICE
import { QuizData } from "../Service/Service";
import ModalF from "./ModalF";

const Quiz: React.FC<quizProps> = ({ QType, TQuestions }) => {
	const [renderData, setRenderData] = useState<QuestionType[]>([]);
	const [inpAnswer, setInpAnswer] = useState<string>("");
	let [questionNumber, setQuestionNumber] = useState<number>(0);
	let [score, setScore] = useState<number>(0);
	const [results, setResults] = useState<boolean>(false);

	useEffect(() => {
		const FilteredData = async () => {
			const toRenderData: QuestionType[] = await QuizData(TQuestions, QType);
			setRenderData(toRenderData);
		};
		FilteredData();
	}, [QType, TQuestions]);

	if (!renderData.length)
		return (
			<Container>
				<img src={Loader} alt="" height={300} />
			</Container>
		);

	const submitEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		let answer = renderData[questionNumber].answer;

		if (inpAnswer === "") {
			alert("please select an option");
		} else {
			if (questionNumber === renderData.length - 1) {
				setResults(!results);
				// alert(`your score is ${score} out of ${renderData.length}`);
			} else {
				if (inpAnswer === answer) {
					setScore(++score);
				}
			}
			// if (questionNumber !== renderData.length - 1)
			setQuestionNumber(++questionNumber);
		}
		setInpAnswer("");
	};

	const changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInpAnswer(event.target.value);
	};

	let questionData: QuestionType = renderData[questionNumber];

	return (
		<>
			{results ? (
				<ModalF Score={score} RenderData={renderData.length} />
			) : (
				<Container>
					<InnerContainer>
						<QuizzHeading>QUIZ</QuizzHeading>
						<QuestionContainer>
							<Question>
								Q.{questionNumber + 1}: {questionData.question}
							</Question>
							<form>
								<OptionsContainer>
									{questionData.options.map((preVal: string, index: number) => {
										return (
											<Option key={index}>
												<input
													type="radio"
													name="option"
													id={preVal}
													value={preVal}
													checked={inpAnswer === preVal}
													onChange={changeEvent}
												/>
												<label htmlFor={preVal}>{preVal}</label>
											</Option>
										);
									})}
								</OptionsContainer>
								<Button
									disabled={inpAnswer === "" ? true : false}
									variant="contained"
									style={{ background: "#36200b", color: "white" }}
									onClick={submitEvent}
								>
									Submit
								</Button>
							</form>
						</QuestionContainer>
					</InnerContainer>
				</Container>
			)}
		</>
	);
};

export default Quiz;
