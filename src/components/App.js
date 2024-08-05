
import React, {useEffect,useState} from "react"

import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {

	const [count, setCount] = useState(0);
	const [text, setText] = useState("");

    // useEffect(
	// 	// 1st arg: side effect (callback function)
	// 	() => console.log("useEffect called"),
	// 	// 2nd arg: dependencies array
	// 	[count]
	//   );

	// useEffect(() => {
	// 	console.log("useEffect called");
	//   }, []); // second argument is an empty array
	
	useEffect(() => {
		document.title = text;
	  }, [text]);
	
	  useEffect(() => {
		setTimeout(() => setCount(0), 5000);
	  }, []);

	  console.log("Component rendering");

	return (
		// <div className="App">
		// 	<Nav />
		// </div>

		<div>
		   <button onClick={() =>setCount((count) => count+1)}> 
			  I've been clicked {count} times
			</button>

		    <input 
			     type="text" 
				 placeholder="Type away..." 
				 value={text}
				 onChange={(event) =>setText(event.target.value)}
			/>
	    </div>
	);
}

export default App;
