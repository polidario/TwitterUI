## Twitter App "Clone" Frontend Project

A simple decentralised web application that allows users to read tweets, write tweets, update tweets, and delete tweets. A very simple CRUD application.

Though, while working on this project, we managed to add more features such as: Liking and disliking a tweet, rendering a timestamp for each tweets, etc.

## Getting started
### :pushpin: Prerequisites

If you like to test this project locally, you will have to install [Node.js](https://nodejs.org/en/) and run the following commands:

```shell
npm install
```
By installing the node modules, you should be able to execute `npm run start` and see the web application working.

### :pushpin: Installation

After setting up your local development, do the following steps:

 1. Create an `.env` file and in this file, add the following:
`REACT_APP_CONTRACT_ADDRESS='0x894Ba2078bC1aFd71d2f15efEE6ccf9387eE8799'`
 2. Restart the react app: `npm run start`

Since we are using [TailwindCSS](https://tailwindcss.com/) in this project, if you wish to customise the style of the components, make sure you execute the following command:
`npx tailwindcss -i ./tailwindcss/base.css -o ./src/css/App.css --watch`

:trollface: