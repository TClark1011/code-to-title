# TS-NODE-BAREBONES-STARTER

This is a template repository that provides an opinionated, bare bones starting point for projects using typescript and node

## HOW TO USE

Click the 'Use this template' button in github to create a new repo based on this template. Clone the repo and run the following command to install dependencies:

`yarn`

This repo was developed using yarn, if you wish to use npm instead then you can run:

`npm install`

Once this command has run, delete the `yarn.lock` file.

## SCRIPTS

The following scripts are defined in `package.json`

- `start` - Runs the built file `build/index.js` file
- `start:dev` - Runs `src/index.ts` file using ts-node, as well as nodemon to rerun the file when any file is saved
- `test` - Run jest tests
- `build` - Builds the program. Built files are saved to the `build/` folder

## INCLUDED TECHNOLOGIES

This template includes the following technologies

- typescript - Typescript
- ts-node - Runs typescript files natively without having to first build them
- nodemon - Rerun commands when any files are saved. Used to rerun `index.ts` when any files are saved when using the `start:dev` script.
- eslint - Code linting
- prettier - code formatting
- prettier-eslint - Allows prettier formatting to adhere to eslint style rules
- jest - Testing library
- ts-jest - Allows use of jest with typescript without requiring the use of babel
- dotenv - Use environment variables defined in `.env` files within your code
