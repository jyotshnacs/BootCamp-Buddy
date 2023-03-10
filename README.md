# BootCamp-Buddy

# Frontend

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


# Backend

# Connecting Our Library to a Database

## Create a Postgres database on ElephantSQL

Navigate to the [elephantSQL website](https://www.elephantsql.com/) and create a new Postgres database.


SQL queries that you will need:

- Create two tables (InterviewPrep and Questions)
- Insert the initial data

<br>

## Create Environment variables

Create a `.env` file at the root of your project. It should contain the following name/value pairs:

```
PORT=3005
POSTGRES_CONNECTION_URL =
```

Your own `POSTGRES_CONNECTION_URL` will be provided by ElephantSQL.

<br>

## Using dot env

You can load environment variables using the [dotenv](https://www.npmjs.com/package/dotenv) package. I
add the following script to your `package.json` file:

```
"start": "node -r dotenv/config app.js"
"dev": "nodemon -r dotenv/config app.js"
```

Now, whenever you enter `npm run dev` or `npm start`, the `dotenv` package will load your environment variables during runtime, and you'll be able to access them via `process.env`.

<br>

## The .env file and .gitignore

`.env` has to be added to your `.gitignore` file. You don't want sensitive database credentials being pushed up to GitHub!

```
node_modules
.env
```

<br>

### Using the `pg` package:

You can connect to the ElephantSQL database using the [`pg`](<(https://node-postgres.com/).>) package. 

The job of the `db/index.js` file is to connect to your database using a `Pool` from the `pg` package and export a `query` method, allowing you to execute SQL queries in your models or other files. This way, you have one connection to the database, and then you export the ability to query using that one connection for use in any other file instead of having multiple connections.


Just to note:

- The docs are using an [arrow function](https://www.w3schools.com/js/js_arrow_function.asp) in their example. Although there are some subtle differences between normal functions we're used to and arrow functions, you can rewrite the query function using the `function` keyword if that's easier for you.
- Don't forget to pass your connection string into your pool! Example: `const pool = new Pool({ connectionString: process.env.POSTGRES_CONNECTION_URL, });`
- Always use [parameterized queries](https://node-postgres.com/features/queries) with the `query` method to help protect against SQL injection - this is important!

<br>


## Description

This app aims to help bootcampers prepare for interviews in the tech industry. This app will have a list of questions that will be randomly selected and displayed to the user.

## API request

| API request           | Description           | API response | Description           |
| --------------------- | --------------------- | ------------ | --------------------- |
| GET /questions        | Get all questions     | 200          | OK                    |
| GET /questions/:id    | Get a question by id  | 201          | Created               |
| POST /questions       | Create a new question | 400          | Bad request           |
| PUT /questions/:id    | Update a question     | 404          | Not found             |
| DELETE /questions/:id | Delete a question     | 500          | Internal server error |

## API request body

| API request body | Description |
| ---------------- | ----------- |
| id               | Question id |
| question         | Question    |
| answer           | Answer      |

## API request example

| API request example | Description           |
| ------------------- | --------------------- |
| GET /questions      | Get all questions     |
| GET /questions/1    | Get a question by id  |
| POST /questions     | Create a new question |
| PUT /questions/1    | Update a question     |
| DELETE /questions/1 | Delete a question     |

# API planning request for Random Interview question

## Description

This app aims to help people prepare for interviews in the tech industry. This app will have a list of questions that will be randomly selected and displayed to the user.

## API request

| API request           | Description           | API response | Description           |
| --------------------- | --------------------- | ------------ | --------------------- |
| GET /questions        | Get all questions     | 200          | OK                    |
| GET /questions/:id    | Get a question by id  | 201          | Created               |
| POST /questions       | Create a new question | 400          | Bad request           |
| PUT /questions/:id    | Update a question     | 404          | Not found             |
| DELETE /questions/:id | Delete a question     | 500          | Internal server error |

## API request body

| API request body | Description |
| ---------------- | ----------- |
| id               | Question id |
| question         | Question    |

## API request example

| API request example | Description           |
| ------------------- | --------------------- |
| GET /questions      | Get all questions     |
| GET /questions/1    | Get a question by id  |
| POST /questions     | Create a new question |
| PUT /questions/1    | Update a question     |
| DELETE /questions/1 | Delete a question     |
