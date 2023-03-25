const questions = [
	{
		question: "HTML stands for -",
		options: ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", "None of these"],
		answer: "HyperText Markup Language"
	},
	{
		question: "Which of the following tag is used to insert a line-break in HTML?",
		options: ["<br>", "<a>", "<pre>", "<b>"],
		answer: "<br>"
	},
	{
		question: "Which of the following element is responsible for making the text italic in HTML?",
		options: ["<i>", "<italic>", "<it>", "<pre>"],
		answer: "<i>"
	},
	{
		question: "<input> is -",
		options: ["a format tag.", "an empty tag", "All of the above", "None of the above"],
		answer: "an empty tag"
	},
	{
		question: "The <hr> tag in HTML is used for -",
		options: ["new line", "vertical ruler", "new paragraph", "horizontal ruler"],
		answer: "horizontal ruler"
	}
];

let currentQuestion = 0;
let score = 0;

const container = document.querySelector(".container");
const submitButton = document.querySelector("#submit");
const result = document.querySelector("#result");
const reloadButton = document.querySelector("#reload");

function displayQuestion() {
	container.innerHTML = "";
	const question = questions[currentQuestion];
	const questionElement = document.createElement("h2");
	questionElement.textContent = question.question;
	container.appendChild(questionElement);
	for (let i = 0; i < question.options.length; i++) {
		const option = question.options[i];
		const input = document.createElement("input");
		input.type = "radio";
		input.name = "answer";
		input.value = option;
		const label = document.createElement("label");
		label.textContent = option;
		container.appendChild(input);
		container.appendChild(label);
	}
}

function checkAnswer() {
	const selectedOption = document.querySelector('input[name="answer"]:checked');
	if (!selectedOption) {
		return;
	}
	const answer = selectedOption.value;
	if (answer === questions[currentQuestion].answer) {
		score++;
	}
	currentQuestion++;
	if (currentQuestion < questions.length) {
		displayQuestion();
	} else {
		displayResult();
	}
}

function displayResult() {
	container.innerHTML = "";
	const resultElement = document.createElement("h2");
	resultElement.textContent = `Your score: ${score}/${questions.length}`;
	container.appendChild(resultElement);
}

function restartQuiz() {
	currentQuestion = 0;
	score = 0;
	displayQuestion();
}

displayQuestion();

submitButton.addEventListener("click", checkAnswer);
reloadButton.addEventListener("click", restartQuiz);
