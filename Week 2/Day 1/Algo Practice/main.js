// 1 - The Math Library

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);

console.log(random);

// 2 - Dice Roller

function d6() {
    var roll = Math.random();

    diceroll = roll * 10;

    roll = roll * 6;

    roll = Math.floor(roll);

    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);



// 3 - Consult the Oracle

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function eightBall(question) {
    var fortune = Math.random();
    fortune = Math.floor(fortune * lifesAnswers.length);
    return `${question} Your fortune is: ${lifesAnswers[fortune]}`;
}

for (i = 0; i < 100; i++) {
    var personFortune = eightBall("Will I win the lottery?");
    console.log(personFortune);
}