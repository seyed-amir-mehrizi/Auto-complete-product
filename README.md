# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).In order to use the Remote Server, [Json-server] (https://www.npmjs.com/package/json-server) library is added to the project. Before Cloning the Project, First you should be sure that json-server is installed on your machine globally. 
Just by writing  "npm install -g json-server" on your command promp, you can install the library globally.

Because of using multiple port to run the fake server and React project, By using the [Concurrently] (https://www.npmjs.com/package/concurrently) library, Both ported integrated and new Script is added to the project to run the server and UI at the same time.
## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app and the fake server in the development mode.\

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

