/* 
Ask us to enter in 7 parameters and it will output a pargaraph with those parameters
*/

//makes a survey by going over an object and using input to insert value after the keys

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const survey = {
  name: "",
  artist: "",
  food: "",
  sport: "",
  activity: "",
  superpower: "",
  music: "",
};

rl.question(
  "What's your name? Nicknames are also acceptable 😀: ",
  (answer) => {
    survey.nickname = answer;

    rl.question("What's an activity you like doing?: ", (answer) => {
      survey.activity = answer;

      rl.question("What do you listen to while doing that?: ", (answer) => {
        survey.music = answer;

        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.): ",
          (answer) => {
            survey.mealTime = answer;

            rl.question(
              "What's your favourite thing to eat for that meal?: ",
              (answer) => {
                survey.favFood = answer;

                rl.question(
                  "Which sport is your absolute favourite?: ",
                  (answer) => {
                    survey.sport = answer;

                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at!: ",
                      (answer) => {
                        survey.superpower = answer;
                        rl.close();
                        console.log(
                          `${survey.name} loves listening to ${survey.artist} while coding, devouring ${survey.food}` +
                            ` for brunch, prefers ${survey.sport} over any other sport, and is amazing at ${survey.activty}` +
                            `super power pick would be ${survey.superpower} and listening to ${survey.music}`
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);

// // What's your favourite thing to eat for that meal?
// // Which sport is your absolute favourite?
// // What is your superpower? In a few words, tell us what you are amazing at!

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What's your name? : ", (answer1) => {
//   let answers = []
//   answers.push(answer1)
//     rl.question("What's an activity you like doing? : ", (answer2) => {
//       answers.push(answer2)
//         console.log(`The sum of above two numbers is ${answers}`);
//         rl.close();
//     });
// });

// // What's your name? Nicknames are also acceptable :)
// // What's an activity you like doing?
// // What do you listen to while doing that?
// // Which meal is your favourite (eg: dinner, brunch, etc.)
// // What's your favourite thing to eat for that meal?
// // Which sport is your absolute favourite?
// // What is your superpower? In a few words, tell us what you are amazing at!

// // const readline = require('readline');

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // rl.question('What do you think of Node.js? ', (answer) => {
// //   console.log(`Thank you for your valuable feedback: ${answer}`);

// //   rl.close();
// // });
