
import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogsCard from "./hogsCard";

function App() {
 
	console.log(hogs)


	return (
		<div className="App">
			<Nav />
			{hogs.map((hog) => <HogsCard hog={hog}/>)}

		</div>
	);
}

export default App;