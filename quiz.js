let nextbtn = document.getElementById("next-btn")
let queno = document.getElementById("queno")
let questtext = document.getElementById("questionText")
let opticont = document.getElementById("options")
let scoreSpan = document.getElementById("score-value")
let scoreDiv = document.getElementById("score")
let retrybtn = document.getElementById("retry-btn")

var questions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["CO2", "O2", "NaCl", "H2O"],
        correctAnswer: "H2O"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
        correctAnswer: "George Washington"
    },
    {
        question: "What is the tallest mammal?",
        options: ["Elephant", "Kangaroo", "Blue Whale", "Giraffe"],
        correctAnswer: "Giraffe"
    },
    {
        question: "What is the capital of Spain?",
        options: ["Seville", "Madrid", "Barcelona", "Valencia"],
        correctAnswer: "Madrid"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Euro", "Ruble", "Won", "Yen"],
        correctAnswer: "Yen"
    },
    {
        question: "Which bird is a symbol of peace?",
        options: ["Hawk", "Dove", "Sparrow", "Eagle"],
        correctAnswer: "Dove"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["São Paulo", "Buenos Aires", "Brasília", "Rio de Janeiro"],
        correctAnswer: "Brasília"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    }
];


var CurrentQuestionIndex = 0
var score = 0

function nextQuestion(){

    var selectedOption = document.querySelector('input[name="city"]:checked')
    if(!selectedOption){
        alert("Please select an option before proceeding!!")
        return
    }

    if(selectedOption.value == questions[CurrentQuestionIndex].correctAnswer){
        score++
    }

    CurrentQuestionIndex++;

    if(CurrentQuestionIndex >= questions.length){
        CurrentQuestionIndex = 0;
        showScore()
        hideQuestion()
    }

    displayQuestion();
}

function hideQuestion(){
    document.getElementById("headsec").style.display = "none"
    document.getElementById("options").style.display = "none"
    document.getElementById("next-btn").style.display = "none"
    retrybtn.style.display = "block"
}

function showQuestion(){
    document.getElementById("headsec").style.display = "block"
    document.getElementById("options").style.display = "block"
    document.getElementById("next-btn").style.display = "block"
    scoreDiv.style.display = 
    retrybtn.style.display = "none"
}

function displayQuestion(){
    queno.innerText = CurrentQuestionIndex + 1
    questtext.innerText = questions[CurrentQuestionIndex].question
    opticont.innerText = " "

    options = questions[CurrentQuestionIndex].options
    options.forEach(function(option) {
        var optionDiv = document.createElement("div")
        optionDiv.classList.add("radio-option")

        optionDiv.addEventListener("click",function(){
            selectRadioButton(this)
        })
        
        optionDiv.innerHTML = `<input type = "radio" name = "city" value = "${option}"> ${option} <br>`
        opticont.appendChild(optionDiv)
    });

    if (CurrentQuestionIndex == (questions.length - 1)) {
        nextbtn.value = "Submit"; // Change value property for input type="button"

    } else {
        nextbtn.value = "Next"; // Change value property for input type="button"
    }
    scoreSpan.innerText = score


}

function selectRadioButton(option){
    var radioBtn = option.querySelector('input[type="radio"]')
    if(!radioBtn.checked){
        radioBtn.checked = true;
    }
}

function showScore(){
    scoreSpan.innerText = score
    scoreDiv.style.display = "block"
}

retrybtn.addEventListener("click", function(){
    CurrentQuestionIndex = 0
    score = 0
    showQuestion()
    displayQuestion()
})

displayQuestion()

nextbtn.addEventListener("click",nextQuestion)