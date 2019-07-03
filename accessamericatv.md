# Access America TV 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Documentation for React and Bootstrap with React are found at:

	https://reactjs.org
	https://facebook.github.io/create-react-app/docs/getting-started
	https://facebook.github.io/create-react-app/docs/adding-typescript
	https://facebook.github.io/create-react-app/docs/adding-bootstrap
	https://react-bootstrap.github.io/getting-started/introduction

Although there are various ways to install `node`, I use Homebrew to manage that and other macOS command-line utilities:

	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Start by updating `brew` and `node` to the latest versions:

	brew update
	brew upgrade node

Then use `npx` to to create a new React app in a subfolder within the current folder, switch to that folder, and then add the dependencies. There will be notices of missing dependencies and errors which will be resolved by adding in the subsequent modules. Most of these errors are issues in the development environment and not in the final application.

	npx create-react-app accessamericatv
	cd accessamericatv/
	npm install -g jshint
	npm install --save eslint
	npm install --save typescript
	npm install --save core-js
	npm install --save react
	npm install --save react-dom
	npm install --save react-router-dom

	npm install --save @types/jest
	npm install --save @types/node
	npm install --save @types/react
	npm install --save @types/react-dom
	
	npm install --save react-popper
	npm install --save react-bootstrap
	npm install --save react-router-bootstrap
	npm install --save react-transition-group
	npm install --save pusher
	
	npm install --save fetch
	npm install --save history
	npm install --save hls.js
	npm install --save react-bootstrap-modal
	npm install --save react-hls
	npm install --save react-iframe
	npm install --save react-moment
	npm install --save react-sizeme
	npm install --save video-react
	npm install --save xml-js

Other node modules will need to be installed as we continue development; they should be documented here.

You do not need to install `bootstrap`, but if you do `npm` will complain that jQuery isn't installed, but you don't need it because `react-bootstrap` replaces jQuery with it's own code.

Go to https://bootswatch.com/ and download a theme (I usually pick https://bootswatch.com/slate/). Create a `css` and `img` folder in both `public` and `src` folders and copy the `bootstrap.min.css` into the `css` folders as well as the `node_modules/react-bootstrap/dist` folder.

Now add the following line at the top of src/index.js:

	import 'bootstrap/dist/css/bootstrap.css';

It is important to note that you can easily change the Bootstrap theme by replacing the default `bootstrap/dist/css/bootstrap.css` with the same file from a theme of your choosing at `https://bootswatch.com`. For production, the `npm run build` command should minify that theme CSS file to `bootstrap.min.css`.

Once the dependencies have been installed, start the development server:

	npm start

Verify that `app-name` is running correctly in a browser window at `http://localhost:3000`. The `npm start` command will tie up a Terminal session, so open anther Terminal window or tab to continue working.

Check the development server web page every time you save an edit - the page will reload when you make edits. You will also see any lint errors in the console.

Development starts with editing `src/App.js` and the corresponding unit test, `src/App.test.js`. An example of React and App.js code can be found at `https://gist.github.com/Thomas-Smyth/006fd507a7295f17a8473451938f9935`.

It is important that you create (and populate) a unit test file for every source code file. `npm test` launches the test runner in the interactive watch mode. `https://facebook.github.io/create-react-app/docs/running-tests` has more information on running tests using React and Jest.

Don't forget when debugging is complete and you are ready to create a Progressive Web App, you should edit `src/index.js` and change `serviceWorker.unregister()` to `serviceWorker.register()`. If you do this early, debugging becomes much harder.

