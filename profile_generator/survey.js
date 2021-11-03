const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = []

rl.question('What do you think of Node.js?\n', (answer) => {
  answers.push(answer);
  rl.question('What\'s an activity you like doing?\n', (answer) => {
    answers.push(answer);
    rl.question('What do you listen to while doing that?\n', (answer) => {
      answers.push(answer);
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.)\n', (answer) => {
        answers.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal?\n', (answer) => {
          answers.push(answer);
          rl.question('Which sport is your absolute favourite?\n', (answer) => {
            answers.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer) => {
              answers.push(answer);
              console.log(`${answers[0]} likes to do ${answers[1]} they also love ${answers[2]} and loves ${answers[3]} they love ${answers[4]} they love ${answers[5]} they wish they had ${answers[6]}`)
              rl.close();
            });
          });
        });
       });
    });
  });
});
