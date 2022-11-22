*Posture and hidrate check app*
- This app is a simple app that cotains a timer that will notify you when you have to change your posture or drink water. (every 45 minutes)
- This app will be a component of a bigger app that will be a personal assistant for people studying in The School of Code.
- Logic: 
    - Timer starts when the app is opened.
    - When the timer is over, a notification will appear.
    - The notification will have a button that will start the timer again.

*Random Interview question*
- This app aims to help people prepare for interviews in the tech industry.
- This app will have a list of questions that will be randomly selected and displayed to the user.
- This app will be a component of a bigger app that will be a personal assistant for people studying in The School of Code.
- Logic:
    - When the app is opened, a random question will appear.
    - The question will be a question that is commonly asked in interviews.
    - The question will have a button that will generate a new question.

*Weakly Review*
- This app aims to help people review their week.
- This app will have a list of questions that will be randomly selected and displayed to the user.
- This app will have a dropdown menu that will allow the user to select the week they want to review.
- This app will have multiple selection options for each question.
- This app will be a component of a bigger app that will be a personal assistant for people studying in The School of Code.
- Logic:
    - When the app is opened, nothing will appear.
    - The user will have to select the week they want to review.
    - When the week is selected, a random question will appear.
    - Will be seven questions in total for each week.
    - The question will have multiple selection options.
    - If the user selects the wrong option, the app will display a message saying that the user has selected the wrong option.
    - If the user selects the right option, the app will display a message saying that the user has selected the right option.
    - At the end of the questions, the app will display a message saying that the user has completed the review and will display the score.
    - The score will be the number of correct answers divided by the total number of questions.

*Squat progress tracker*
- This app aims to help people track their progress in squats.
- This app will have a buttons that will add 1,5,10 squats to the total number of squats.
- This app will be a component of a bigger app that will be a personal assistant for people studying in The School of Code.
- Logic:
    - When the app is opened, the total number of squats will be 0.
    - The user will have to click on the button that will add the number of squats to the total number of squats.
    - The user submits the number of squats they have done to the life time total.


# Component tree

 - APP
    - Navbar
    - Main
        - Weekly review
            - Dropdown menu
            - Question
                - Multiple selection options
        - Random interview question
            - Question
        - Posture and hidrate check
            - Timer
        - Squat progress tracker
            - Buttons
    - Footer


# API planning request for Weekly review

## Description

This app aims to help people prepare for interviews in the tech industry. This app will have a list of questions that will be randomly selected and displayed to the user.

## API request

| API request | Description | API response | Description |
| ----------- | ----------- | ----------- | ----------- |
| GET /questions | Get all questions | 200 | OK |
| GET /questions/:id | Get a question by id | 201 | Created |
| POST /questions | Create a new question | 400 | Bad request |
| PUT /questions/:id | Update a question | 404 | Not found |
| DELETE /questions/:id | Delete a question | 500 | Internal server error |

## API request body

| API request body | Description |
| ----------- | ----------- |
| id | Question id |
| question | Question |
| answer | Answer |

## API request example

| API request example | Description |
| ----------- | ----------- |
| GET /questions | Get all questions |
| GET /questions/1 | Get a question by id |
| POST /questions | Create a new question |
| PUT /questions/1 | Update a question |
| DELETE /questions/1 | Delete a question |



# API planning request for Random Interview question

## Description

This app aims to help people prepare for interviews in the tech industry. This app will have a list of questions that will be randomly selected and displayed to the user.

## API request

| API request | Description | API response | Description |
| ----------- | ----------- | ----------- | ----------- |
| GET /questions | Get all questions | 200 | OK |
| GET /questions/:id | Get a question by id | 201 | Created |
| POST /questions | Create a new question | 400 | Bad request |
| PUT /questions/:id | Update a question | 404 | Not found |
| DELETE /questions/:id | Delete a question | 500 | Internal server error |

## API request body

| API request body | Description |
| ----------- | ----------- |
| id | Question id |
| question | Question |

## API request example

| API request example | Description |
| ----------- | ----------- |
| GET /questions | Get all questions |
| GET /questions/1 | Get a question by id |
| POST /questions | Create a new question |
| PUT /questions/1 | Update a question |
| DELETE /questions/1 | Delete a question |

