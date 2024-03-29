import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';
import { Form } from './Form';
import { UncontrolledForm } from './UncontrolledForm';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/profile/" component={Profile} user="me" />
				<Route path="/profile/:user" component={Profile} />
			</Router>
			<Form />
			<UncontrolledForm />
		</main>
	</div>
);

export default App;
