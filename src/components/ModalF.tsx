import React, { useContext } from "react";
import {
	Container,
	InnerContainer,
	QuestionContainer,
	QuizzHeading,
	Results,
	RightAns,
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
					<Results>
						Your Score&nbsp;
						<RightAns>
							{Score}/{RenderData}
						</RightAns>
					</Results>
					<Button
						style={{ background: "#36200b", color: "white" }}
						onClick={ContextCame}
					>
						Play Again
					</Button>
				</QuestionContainer>
			</InnerContainer>
		</Container>
	);
};

export default ModalF;
