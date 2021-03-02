import React, { useState, useRef, useEffect } from "react";

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
	const [results, setResults] = useState(false);

	const radioBtn = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const FilteredData = async () => {
			const toRenderData: QuestionType[] = await QuizData(TQuestions, QType);
			setRenderData(toRenderData);
		};
		FilteredData();
	}, [QType, TQuestions]);

	if (!renderData.length) return <Container>Loading...</Container>;

	const submitEvent = (event: any) => {
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

	const changeEvent = (event: any) => {
		setInpAnswer(event.target.value);
	};

	let questionData = renderData[questionNumber];

	return (
		<>
			{results ? (
				<ModalF Score={score} RenderData={renderData.length} />
			) : (
				<Container>
					<InnerContainer>
						<QuizzHeading>QUIZ</QuizzHeading>
						<QuestionContainer>
							<Question> {questionData.question} </Question>
							<form>
								<OptionsContainer onChange={changeEvent}>
									{questionData.options.map((preVal, index) => {
										return (
											<Option key={index}>
												<input
													type="radio"
													name="option"
													id={preVal}
													value={preVal}
													ref={radioBtn}
												/>
												<label htmlFor={preVal}>{preVal}</label>
											</Option>
										);
									})}
								</OptionsContainer>
								<Button
									disabled={inpAnswer === "" ? true : false}
									variant="contained"
									style={{ background: "#ced373" }}
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
