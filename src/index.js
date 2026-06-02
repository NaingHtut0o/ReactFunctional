import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import App from './ReduxApp';
import App, { DynamicRoute } from './RouteApp';
import reportWebVitals from './reportWebVitals';

// functional
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// redux
/*import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore((state = [{id: 1, name: 'Orange', price: 0.99}, {id: 2, name: 'Apple', price: 1.49}], action) => {
	if(action.type === "ADD") return [...state,action.item];
	return state;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
  </React.StrictMode>
);*/

//, route
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
	<DynamicRoute/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
