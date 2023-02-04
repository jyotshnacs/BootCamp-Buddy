How to use this repository:-

Fork this repository
Clone your fork
npm i (to install node modules)
Once installed, you can run the app using npm start
Create a branch for your changes
Make your changes
Commit your changes
Push your changes to your fork
If you want to collaborate:

Create a pull request
Wait for your changes to be merged
Update your fork
Update your local repository
Update your branch
Update your pull request
Update your changes
App Introduction

This app aims to help bootcampers manage their wellbeing and to help with interview preparation.
The wellbeing timer reminds bootcampers to check their posture & hydrate
To start the app select setting and select the time you want to study for (we advise 45 minutes).
The app will then start a timer and when the timer is over it will notify you to change your posture or drink water by changing the colour.
Interview prompts are fetched from a database
Quiz questions - this section is unfinished but will generate quiz questions from our database.
In order to fetch data from the database, a RESTful API is required or a JSON file containing the information
Posture and hydrate check app

This app is a simple app that cotains a timer that will notify you when you have to change your posture or drink water. (every 45 minutes)
This app will be a component of a bigger app that will be a personal assistant for people studying in The School of Code.
Logic:
Timer starts when the app is opened.
When the timer is over, a notification will appear.
The notification will have a button that will start the timer again.
Random Interview question

This app aims to help bootcampers prepare for interviews in the tech industry.
This app will have a list of questions that will be randomly selected and displayed to the user.
This app will be a component of a bigger app that will be a personal assistant for people studying in The School of Code.
Logic:
When the app is opened, a random question will appear.
The question will be a question that is commonly asked in interviews.
The question will have a button that will generate a new question.
Weekly Review

This app aims to aid learning, using tech quiz questions
This component is currently unfinished, but our aims are as follows:
This app will have a list of questions that will be randomly selected and displayed to the user.
This app will have a dropdown menu that will allow the user to select the week they want to review.
This app will have multiple selection options for each question.
This app will be a component of a bigger app that will be a personal assistant for people studying in The School of Code.
Logic:
When the app is opened, nothing will appear.
The user will have to select the week they want to review.
When the week is selected, a random question will appear.
Will be seven questions in total for each week.
The question will have multiple selection options.
If the user selects the wrong option, the app will display a message saying that the user has selected the wrong option.
If the user selects the right option, the app will display a message saying that the user has selected the right option.
At the end of the questions, the app will display a message saying that the user has completed the review and will display the score.
The score will be the number of correct answers divided by the total number of questions.
Component tree
APP
Navbar
Main
Weekly review
Dropdown menu
Question
Multiple selection options
Random interview question
Question
Posture and hidrate check
Timer
Footer