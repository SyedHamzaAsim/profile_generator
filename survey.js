const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, activityQuestion, songChoice, meal, food, sport, strength;

rl.question("What's your name? Nicknames are also acceptable ", (nickname) => {
  name = nickname;

  rl.question("What's an activity you like doing?", (activity) => {
    activityQuestion = activity;

    rl.question("What do you listen to while doing that?? ", (music) => {
      songChoice = music;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (time) => {
        meal = time;

        rl.question("What's your favourite thing to eat for that meal? ", (cuisine) => {
          food = cuisine;
            
          rl.question("Which sport is your absolute favourite? ", (game) => {
            sport = game;
            
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {
              strength = power;

              console.log(`${name} loves listening to ${songChoice} while ${activityQuestion}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${strength}.`);
              rl.close();
            });
            
          });
        });

      });
    });
  });
});


