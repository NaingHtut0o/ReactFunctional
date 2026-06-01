import React, {useRef} from 'react';
import {connect} from 'react-redux';

const Item = ({name, price}) => (
	<li> {name}, ${price} </li>
);

const AddForm = ({add}) => {
	let nameRef = useRef();
	let priceRef = useRef();
	
	const addItem = () => {
		let name = nameRef.current.value;
		let price = priceRef.current.value;
		
		add(name, price);
	}
	
	return (
		<div>
			<input type="text" ref={nameRef}/><br/>
			<input type="text" ref={priceRef}/><br/>
			<button onClick={addItem}>Add</button>
		</div>
	);
}

const App = ({items, add}) => {
	const addItem = (name, price) => {
		add(
			items.length + 1,
			name,
			price
		);
	}
	
	return (
		<div>
			<ul>
				{items.map(i => <Item key={i.id} name={i.name} price={i.price}/>)}
			</ul>
			<AddForm add={addItem}/>
		</div>
	)
}

const stateToProps = state => {
	return {
		items : state
	};
}

const dispatchToProps = dispatch => {
	return {
		add : (id, name, price) => {
			dispatch({
				type: 'ADD',
				item: {id, name, price}
			});
		}
	};
}

const ReduxApp = connect(stateToProps, dispatchToProps)(App);

export default ReduxApp;