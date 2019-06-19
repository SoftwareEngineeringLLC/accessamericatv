import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-bootstrap';

const Router = (props) => {
	<Switch>
		<Route
			path="/"
			exact
			render={props => <HomePage {props} currentState={currentState} />}
		/>
		<Route
			path="/Stream"
			render={props => <StreamPage currentState={currentState} />}
		/>
		<Route
			path
        <Route
			path="/Explore"
          render={props => <ExplorePage currentState={currentState} />}
		/>
        <Route
			path="/Library"
			render={props => <LibraryPage currentState={currentState} />}
		/>
		<Route
			path="/Info"
			render={props => <InfoPage currentState={currentState} />}
		/>
		<Route
			path="/User"
			render={props => <UserPage currentState={currentState} />}
		/>
		<Route render={props => <HomePage currentState={currentState} />} />
	</Switch>
}
export default Router;