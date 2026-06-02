import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams,
} from 'react-router-dom';

const users = [
	{ id: 1, name: 'Alice', gender: 'f' },
	{ id: 2, name: 'Bob', gender: 'm' },
	{ id: 3, name: 'Tom', gender: 'm' },
	{ id: 4, name: 'Mary', gender: 'f' },
];

const Male = props => (
	<ul>
		{users.filter(i => i.gender === 'm').map(i => <li key={i.id}>{i.name}</li>)}
	</ul>
);

const Female = props => (
	<ul>
		{users.filter(i => i.gender === 'f').map(i => <li key={i.id}>{i.name}</li>)}
	</ul>
);

const User = props => {
	const {name} = useParams();
	
	return (
		<h1>Profile - {name}</h1>
	)
}

const RouteApp = props => (
	<Router>
		<div>
			<ul>
				<li><Link to="/male">Male</Link></li>
				<li><Link to="/female">Female</Link></li>
			</ul>
			<div className="routeDiv">
				<Routes>
					<Route path="/male" element={<Male/>}/>
					<Route path="/female" element={<Female/>}/>
				</Routes>
			</div>
		</div>
	</Router>
);

const DynamicRoute = props => (
	<Router>
		<div>
			<ul>
				<li><Link to="/user/Alice">Alice</Link></li>
				<li><Link to="/user/Bob">Bob</Link></li>
			</ul>
			<div className="routeDiv">
				<Routes>
					<Route path="/user/:name" element={<User/>}/>
				</Routes>
			</div>
		</div>
	</Router>
);

export default RouteApp;

export {DynamicRoute};