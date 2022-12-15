'use strict';
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),


  registerNewAnswer() {

    const answer = prompt(`${this.question} \n ${this.options.join('\n')}\n(Write option number)`)
    let answerNum = 7;
    (answer === '') ? (answerNum = 4) : answerNum = Number(answer);
    if (3 >= answerNum && answerNum >= 0) {
      this.answers[answerNum] += 1;
    }

    this.displayResults('string');
  },
  displayResults(type = 'array') {
    //array
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are: ${this.answers.join(' ')}`);
    }
    //string
  },
}

poll.displayResults.call({ answers: [4, 3, 5] }, 'string');

const pollButton = document.querySelector('.poll');
pollButton.addEventListener('click', poll.registerNewAnswer.bind(poll))