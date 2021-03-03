import styled from "styled-components";

const primaryColor = "#ffb7689c";
const secondaryColor = "#ffb768";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${primaryColor};
`;

export const InnerContainer = styled.div`
	width: 25rem;
	max-width: 40rem;
	min-height: 4rem;
	background-color: ${secondaryColor};
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
	border-radius: 6px;
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
		both;
	animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

	@-webkit-keyframes scale-up-center {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
	@keyframes scale-up-center {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
`;

export const Question = styled.h1`
	font-size: 1.4rem;
	margin-bottom: 1rem;
`;

export const OptionsContainer = styled.ul`
	font-size: 1rem;
	margin-bottom: 1rem;
`;

export const Option = styled.li`
	padding: 0.2rem 0rem;
	list-style: none;

	& label {
		margin: 0rem 0rem 0rem 0.5rem;
		cursor: pointer;
	}

	& input {
		cursor: pointer;
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 2rem;
	font-size: 1rem;
	border: none;
	outline: none;
	background-color: ${primaryColor};
	cursor: pointer;
	transition: 1s all;

	&:hover {
		background-color: #dbc548;
	}

	&:disabled:hover {
		cursor: not-allowed;
		background-color: #e7d467;
	}
`;

export const QuizzHeading = styled.h1`
	text-align: center;
	margin-top: -1rem;
	background-color: #36200b;
	color: white;
	padding: 0.4rem;
	font-size: 1.8rem;
	letter-spacing: 0.3rem;
	margin: 0px;
	border-radius: 6px 6px 0px 0px;
	box-shadow: 0px 1px 8px #36200b;
`;

export const SelectSection = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 1.2rem 1rem 2rem 1rem;
`;

export const QuestionContainer = styled.div`
	padding: 1.2rem 2rem 2rem 2rem;
`;

export const StartBtnContainer = styled.div`
	padding: 0rem 2rem 2rem 2rem;
`;

export const Results = styled.h1`
	text-align: center;
	font-size: 1.7rem;
	margin-bottom: 1.8rem;
`;

export const RightAns = styled.span`
	margin: 0rem 0.4rem;
`;
