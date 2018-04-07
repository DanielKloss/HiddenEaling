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
                quote: "",
                quoter: "",
                question: "Leave the extreme comfort of your home and turn your back on Emily's oldest living relatives. Which baked good can still be seen at the caffinated corner?",
                answers: ["hovis", "bread"]
            },
            {
                number: 2,
                quote: "",
                quoter: "",
                question: "Walk inn to innpassing celestial wonders on your way. Which Lady has helped establish the local education?",
                answers: ["byron", "lady byron"]
            },
            {
                number: 3,
                quote: "",
                quoter: "",
                question: "All roadds lead to Rome (or Naples in this case) via DELIcious hilltop treats. What furry friend can join you at stage six?",
                answers: ["dog", "a dog", "your dog"]
            },
            {
                number: 4,
                quote: "",
                quoter: "",
                question: "Follow the road trodden by leaders past. Keep bright weather on your L and continue onto greener pastures. Find yourself at a mixed [anagram]. Which Manor resides here?",
                answers: ["pitzhanger", "pitzhanger manor"]
            },
            {
                number: 5,
                quote: "",
                quoter: "",
                question: "Do a Bonnie Tyler Bright Eyes and put Andy Murray's playground on your left. Pass between a red letter day and a box full of technical difficulties. Entera baby sheep's greenland and find the date of a light filled festival",
                answers: ["2nd feb", "2nd february", "2/2", "2-2", "2 feb", "2 february"]
            },
            {
                number: 6,
                quote: "",
                quoter: "",
                question: "Walk centrally to where children laugh. From tippy toes to bigger feet, pass theri older siblings laughing just as hard. As green turns to grey, what upholstery is the preferred selection?",
                answers: ["bedding", "carpets", "1st choice", "1st choice bedding and carpets"]
            },
            {
                number: 7,
                quote: "",
                quoter: "",
                question: "Passing flames, lights and eastern delights, cross the bridge of upmost pastures. What type of apple will keep the doctor away?",
                answers: ["bramley", "bramley apple", "bramley apples"]
            },
            {
                number: 8,
                quote: "",
                quoter: "",
                question: "Go past the clean owl and cross the glastonbury essential. The source of poolside tantrums sends you round the bend. Plough on past god's children and a tiny borough. What colour matches AN and LY's cause for celebration this April?",
                answers: ["red"]
            },
            {
                number: 9,
                quote: "",
                quoter: "",
                question: "Swing by matrimony and cross to lunar schooling.",
                answers: [""]
            },
            {
                number: 10,
                quote: "",
                quoter: "",
                question: "",
                answers: [""]
            },
            {
                number: 11,
                quote: "",
                quoter: "",
                question: "",
                answers: ["""]
        },
            {
                number: 12,
                quote: "",
                quoter: "",
                question: "Congratulations! You have finished!- Happy Birthday!",
                answers: []
            }
        ];

        self.hints = [
            {
                number: 1,
                hint: "Leave home and turn right. Look for a faded sign above Munsons",
            },
            {
                number: 2,
                hint: "Walk from the New Inn to the Castle Inn and look for a plaque on UWL",
            },
            {
                number: 3,
                hint: "Walk to Santa Maria, look for stage six and reference to animals",
            },
            {
                number: 4,
                hint: "Walk down Disraeli Road and onto Lammas Park Gardens. Enter Walpole Park",
            },
            {
                number: 5,
                hint: "Leave Walpole Park and enter Lammas Park via Eles Road",
            },
            {
                number: 6,
                hint: "Walk through Lammas Park past both playgrounds and out the other side. Turn left onto the road",
            },
            {
                number: 7,
                hint: "Walk past Northfields Tube and to a pharmacy",
            },
            {
                number: 8,
                hint: "Follow the road road to the left. Pass the schools and look out for siginificant door numbers",
            },
            {
                number: 9,
                hint: "",
            },
            {
                number: 10,
                hint: "",
            },
            {
                number: 11,
                hint: "",
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
