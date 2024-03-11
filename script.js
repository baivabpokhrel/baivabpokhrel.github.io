let questions = [
    { question: "What is the process of cleaning data called?", answer: "data cleaning" },
    { question: "Which language is primarily used for data analysis and statistical modeling?", answer: "r" },
    { question: "What is the field of Machine Learning that deals with neurons?", answer: "deep learning" },
    { question: "What is the full form of LLM?", answer: "large language models" },
    { question: "What does 'SQL' stand for?", answer: "structured query language" }
];
let currentQuestion = 0;

function evaluateGuess() {
    const userGuess = document.getElementById('guessInput').value.toLowerCase();
    const resultDisplay = document.getElementById('gameResult');
    if (userGuess === questions[currentQuestion].answer) {
        resultDisplay.innerHTML = 'Correct! Moving on...';
        currentQuestion = (currentQuestion + 1) % questions.length; // Cycle through questions
        document.getElementById('number-guess-game').getElementsByTagName('p')[0].innerText = questions[currentQuestion].question; // Update question
    } else {
        resultDisplay.innerHTML = 'Try again, that was not correct.';
    }
    document.getElementById('guessInput').value = ''; // Clear input after guess
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('number-guess-game').getElementsByTagName('p')[0].innerText = questions[currentQuestion].question; // Set initial question

    const name = "Baivab Pokhrel";
    const description = "Data Scientist | AI Enthusiast";
    const elementForName = document.getElementById('typing-name');
    const elementForDescription = document.getElementById('typing-description');
    const profilePic = document.getElementById('profile-pic'); // Reference to your picture

    let indexForName = 0;
    let indexForDescription = 0;

    function typeEffect(element, text, index, callback) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(() => typeEffect(element, text, index, callback), 150);
        } else if (callback) {
            callback(); // Execute callback after the text has been fully typed
        }
    }

    function startDescriptionTyping() {
        typeEffect(elementForDescription, description, indexForDescription, null);
        profilePic.style.display = 'block'; // Show the picture

    }

    typeEffect(elementForName, name, indexForName, startDescriptionTyping); // Start typing name and then description

    // Mouse trail effect
// Enhanced Mouse trail effect
let trailSize = 15; // Increased number of trail marks for a more noticeable effect
let trails = []; // To keep track of our trail marks

for (let i = 0; i < trailSize; i++) {
    let trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.backgroundColor = `hsl(${(i / trailSize) * 360}, 100%, 50%)`; // Color change
    trail.style.opacity = (1 - i / trailSize).toString(); // Gradual fade
    trail.style.width = `${Math.max(10 - i, 3)}px`; // Varying size
    trail.style.height = trail.style.width; // Keep it circular
    document.body.appendChild(trail);
    trails.push(trail);
}

document.addEventListener('mousemove', (e) => {
    trails.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.left = `${e.pageX - trail.offsetWidth / 2}px`;
            trail.style.top = `${e.pageY - trail.offsetHeight / 2}px`;
        }, index * 20); // Staggering effect for each trail mark
    });
});
});