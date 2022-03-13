## To run development
npm install
npm start

## Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!


## Steps to be considered in order to get started.

After you run 'nmp start', you have to start the json-server: 
"json-server --watch src/db.json"

or

you type in terminal;
"$ json-server --watch src/db.json --port 3001"

to start a custom localhost number.

Here you can get more info:
https://www.npmjs.com/package/json-server

After that, you must udjust the localhost number in your App.js:

  const { get } = useFetch("http://localhost:3001/");

  This is the localserver for json-server.