// IMPORTING TYPES
import { QuizType, QuestionType } from "../Types/types";

// IMPORTING UTILS
import { shuffleArray } from "../utils";

export const QuizData = async (
	TQuestions: any,
	QType: any
): Promise<QuestionType[]> => {
	const data = await fetch(
		`https://opentdb.com/api.php?amount=${TQuestions}&diffculty=${QType}&type=multiple`
	);
	const { results } = await data.json();

	const FilterQuizData: QuestionType[] = results.map((val: QuizType) => {
		return {
			question: val.question,
			answer: val.correct_answer,
			options: shuffleArray(val.incorrect_answers.concat(val.correct_answer)),
		};
	});

	return FilterQuizData;
};
