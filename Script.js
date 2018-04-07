'use strict';

angular.module('hiddenCity', ['ngCookies'])

.controller('controller', ['$cookies', function ($cookies) {
    var self = this;

    self.CheckIfStarted = function () {
        if (parseInt(self.currentClueIndex) != 0) {
            self.hasStarted = true;
        }
    }

    self.CheckIfFinished = function () {
        if (parseInt(self.currentClueIndex) + 1 == self.clues.length) {
            self.hasFinished = true;
        }
    }

    self.clues = [
        {
            number: 1,
            quote: "It can be a dangerous business going out your door. You step onto the road, and if you don't keep your feet, there is no knowing where you might be swept off to.",
            quoter: "Bilbo Baggins",
            question: "You leave home on a great quest, looking for the wise circular god. You find it instantly and it tells you to head 'North'. Which Ealing family live furthest 'north'?",
            answers: ["Hurst", "Hursts", "The Hursts"]
        },
        {
            number: 2,
            quote: "Graffiti is one of the few tools you have if you have almost nothing. And even if you don't come up with a picture to cure world poverty you can make someone smile while they're having a piss.",
            quoter: "Banksy",
            question: "You decide to press on and hang a left in order to enter an American city parkland. Who was 'ere at the very centre of the park? ",
            answers: ["Splod", "Splod was ere", "Splod was here"]
        },
        {
            number: 3,
            quote: "I swear to drunk I'm not god",
            quoter: "Annonymous Drunk",
            question: "You hear The Duke calling but he's drunk on whiskey and walking DIAGONALLY. Luckily there is a nice avenue of Limes for him to sleep under. When were they planted?",
            answers: ["1980", "Nineteen Eighty", "36 years ago"]
        },
        {
            number: 4,
            quote: "Football is a simple game. Twenty-two men chase a ball for 90 minutes and at the end, the Germans always win.",
            quoter: "Gary Lineker",
            question: "All this walking has you in the mood for exercise. You walk past the mordern sports clubhouse to a much more elderly version. When was this clubhouse founded?",
            answers: ["1913", "Ninteen Thirty", "86 years ago"]
        },
        {
            number: 5,
            quote: "It's up to you, you can either shut up or you can have your head cut off.",
            quoter: "Queenie - Blackadder",
            question: "You've had enough sport for now so you move on past 'The Sport of Kings' and towards the laughter of children. Here, your journey through the grassland comes to an end. Who do you think of as you leave?",
            answers: ["QE2", "QEII", "Queen Elizabeth", "Queen Elizabeth 2", "Queen Elizabeth II"]
        },
        {
            number: 6,
            quote: "All animals are equal but some animals are more equal than others.",
            quoter: "George Orwell - Animal Farm",
            question: "Take the farmlike road towards 'The Village'. How much is a Pork Belly Pennag at the inn?",
            answers: ["13", "£13", "13 pounds"]
        },
        {
            number: 7,
            quote: "Only the dead have seen the end of war.",
            quoter: "Plato",
            question: "As you continue, new religion becomes old while a gothic structure looms. Who was the stoney symbolism erected by?",
            answers: ["Relatives and Friends", "Relatives + friends", "Relatives Friends"]
        },
        {
            number: 8,
            quote: "If you carry your childhood with you, you never become older.",
            quoter: "Annonymous",
            question: "The Village has become too urban and you long for a SMALL taste of a FOREST or a MEADOW again. What colour is the front door of a very familiar house?",
            answers: ["Red"]
        },
        {
            number: 9,
            quote: "It is not the mountian we conquer but ourselves.",
            quoter: "Edmund Hillary",
            question: "Onwards and upwards onto Woodfield's bigger brother. You keep climbing until you hit a real MOUNTian. Up for a challenge, you keep climbing. You cross a royal pathway and keep your sword on you left side as  you attack her castle. Who lives at 76?",
            answers: ["Nanna", "Barbara", "Nana"]
        },
        {
            number: 10,
            quote: "Bazinga",
            quoter: "Sheldon Cooper",
            question: "You keep descending upon the castle, wave after wave of troops until until all that is left is a single scorched tree in the middle of the path. Eager for some joy after the terrors of war you head towards the playground. Your prayers are soon answered by a scientist saint. When is the last time you could send a letter back home?",
            answers: ["17:45", "5:45", "five forty five", "5-45", "17-45", "5.45", "17.45"]
        },
        {
            number: 11,
            quote: "It's good to have an end to journey toward; but it is the journey that matters, in the end",
            quoter: "Ernest Hemmingway",
            question: "After a long journey you decide to head homeward. You need to stock up on supplies so you hang a left at the shop on the corner, looking for somewhere to spend the night. Where is the closest bed?",
            answers: ["The Drayton", "The Drayton Court", "Drayton", "The Drayton Court Hotel", "The Drayton Hotel"]
        },
        {
            number: 12,
            quote: "",
            quoter: "",
            question: "Congratulations! You have finished the quest! Use this code in the Drayton for a well earned drink and bite to eat - Happy Birthday!",
            answers: []
        }
    ];

    self.hints = [
        {
            number: 1,
            hint: "Walk to St Stephens Church and all the way up North Avenue.",
        },
        {
            number: 2,
            hint: "Enter Cleveland Park and look in the flower bed at the center.",
        },
        {
            number: 3,
            hint: "Take the diagonal path towards the Duke of Kent and enter Scotch Common.",
        },
        {
            number: 4,
            hint: "Go to the bowls clubhouse.",
        },
        {
            number: 5,
            hint: "Look at the Meadvale Road gates.",
        },
        {
            number: 6,
            hint: "There is a menu outside The Village Inn. They have changed the menu though! The answer is 13 pounds...",
        },
        {
            number: 7,
            hint: "Walk past the Methodist to the CofE. On the corner of Denison Road is a statue.",
        },
        {
            number: 8,
            hint: "Number 23, Woodfield Avenue.",
        },
        {
            number: 9,
            hint: "76 is Downhurst Residential Home.",
        },
        {
            number: 10,
            hint: "Check the post box on the corner of St Leonard's and Carlton.",
        },
        {
            number: 11,
            hint: "The nearest bed is in a hotel.",
        },
    ];

    self.hasStarted = false;
    self.enteredClue = false;
    self.isCorrect = false;
    self.hintGiven = false;
    self.hasFinished = false;
    
    self.currentClueIndex = $cookies.get('currentClueIndex');

    if (self.currentClueIndex == undefined) {
        self.currentClueIndex = 0;
    }
    
    self.CheckIfFinished();
    self.CheckIfStarted();
    
    self.currentClue = self.clues[self.currentClueIndex];
    self.currentHint;
    self.theAnswer = "";

    self.Start = function () {
        self.hasStarted = true;
    }

    self.GetHint = function () {
        self.currentHint = self.hints[self.currentClueIndex];
        self.enteredClue = false;
        self.hintGiven = true;
    };

    self.SubmitAnswer = function () {
        self.enteredClue = true;
        self.isCorrect = false;
        self.hintGiven = false;

        angular.forEach(self.clues[self.currentClueIndex].answers, function (value, key) {
            if (value.toLowerCase() == self.theAnswer.toLowerCase() || value.toLowerCase() == "expired") {
                self.currentClueIndex++;
                $cookies.put('currentClueIndex', self.currentClueIndex);
                self.currentClue = self.clues[self.currentClueIndex];
                self.isCorrect = true;
                self.hintGiven = false;
                self.theAnswer = "";

                self.CheckIfFinished();
            }
        });
    };
}]);
