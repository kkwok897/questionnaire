const quizData = [
    {
        question: "Please enter your full name below: ",
        val: 1
    },
    {
        question: "Please enter your age below: ",
        val: 1
    },
    {
        question: "Please enter below the country you currently reside in: ",
        val: 1
    },
    {
        question: "Please enter your country of origin below: ",
        val: 1
    },
    {
        question: "What languages do you speak? ",
        val: 1
    },
    {
        question: "What devices do you have access to? ",
        choices: ["Macbook", "PC/non-apple laptop", "iPhone", "Android Phone", "Tablet", "iPad"],
        val: 2
    },{
        question: "Please select the gender you identify the most with. ",
        choices: [female, male, nonbinary],
        val: 2
    },
    {
        question: "Do you have experience in digital art? ",
        choices: [yes, no],
        val: 2
    },
    {
        question: "If so, which software have you used before? ",
        choices: [CSP, photoshop, illustrator],
        val: 2
    },
    
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const submitBtn = document.getElementById('submit')
const answertext = document.getElementById('fname')


let currentQuiz = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    changeType(currentQuizData.val, quizData[currentQuiz])
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    var a = document.getElementById('fname')
    if(a != null){
        answer = a.id
    }

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
       currentQuiz++
       
        clearAnswerInput()
       if(currentQuiz < quizData.length) {
           loadQuiz()
           changeType(quizData[currentQuiz].val)
       } else {
           quiz.innerHTML = `
           <h2>slayed thank you</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

function clearAnswerInput(){  
   document.getElementById('fname').value = "";
}

function changeType(val, question){
    if(val == 1){
        document.getElementById('fname').type = 'text'
    }else if(val == 2){
        document.getElementById('fname').type = 'checkbox'

        var label = document.createElement("Label")
        var options = question.choices
        opt = options[0]
            label.for = opt
            label.innerHTML = opt
            document.getElementById("form").appendChild(label);
            document.getElementById("form").appendChild(document.createElement("br"))

        //addChecklistOptions(question)
    }
}

function addChecklistOptions(question){
   
        var options = question.choices

        if( options.length >=2){
    
            for(let i = 1; i < options.length; i++){
                var opt = options[i]

            var option = document.createElement("input")
            option.type = "checkbox"
            option.value = opt
            option.name = opt
            option.id = opt
            document.getElementById("form").appendChild(option)

            var label = document.createElement("Label")
            label.for = opt
            label.innerHTML = opt
            document.getElementById("form").appendChild(label);

            document.getElementById("form").appendChild(document.createElement("br"))
            }
        } 

}