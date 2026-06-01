import React, {useRef, useState} from 'react';

const Item = ({name, price}) => (
	<li>{name}, ${price}</li>
	);
	
const AddForm = ({add}) => {
	let nameRef = useRef();
	let priceRef = useRef();
	
	let addItem = () =>	{
		let name = nameRef.current.value;
		let price = priceRef.current.value;
		
		add(name, price);
	}
	
	return (
		<div>
			<input type="text" ref={nameRef}/><br/>
			<input type="price" ref={priceRef}/><br/>
			<button onClick={addItem}>Add</button>
		</div>
	);
}

const App = props => {
	let [items, setItems] = useState([
			{ id: 1, name: 'Apple', price: 0.99 },
			{ id: 2, name: 'Orange', price: 1.49 },
		]);
		
	const add = (name, price) => {
		let id = items.length +1;
		
		setItems([
			...items,
			{ id, name, price },
		]);
	}
	
	return (
		<div>
			<ul>
				{items.map( i => <Item key={i.id} name={i.name} price={i.price}/>)}
			</ul>
			<AddForm add={add}/>
		</div>
	)
}

export default App;
