import React, { useContext } from "react";
import {
	Container,
	InnerContainer,
	QuestionContainer,
	QuizzHeading,
} from "./QuizStyle";

import { modalProps } from "../Types/types";
import { Button } from "@material-ui/core";

// IMPORTING CONTEXT
import { GlobalContext } from "./createContext";

const ModalF: React.FC<modalProps> = ({ Score, RenderData }) => {
	const ContextCame = useContext(GlobalContext);

	return (
		<Container>
			<InnerContainer>
				<QuizzHeading>Quiz</QuizzHeading>
				<QuestionContainer>
					<h2>
						Your Score {Score} out of {RenderData}
					</h2>
					<Button onClick={ContextCame}>Play Again</Button>
				</QuestionContainer>
			</InnerContainer>
		</Container>
	);
};

export default ModalF;
