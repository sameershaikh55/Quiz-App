export type QuizType = {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
};

export type QuestionType = {
	question: string;
	options: string[];
	answer: string;
};

export type quizProps = {
	QType: string;
	TQuestions: number;
};

export type modalProps = {
	Score: number;
	RenderData: number;
};
