const readline = require('readline');
const { getChatbotResponse } = require('./chatbot/chatbot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("College Admission Chatbot");
console.log("Ask your questions or type 'exit' to quit.");

function askQuestion() {
  rl.question("\nYou: ", (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log("Chatbot: Goodbye!");
      rl.close();
    } else {
      const reply = getChatbotResponse(input);
      console.log("Chatbot:", reply);
      askQuestion();
    }
  });
}

askQuestion();
