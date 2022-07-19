
import React,{useState} from "react";


//create your first component
const Home = () => {
	let activeLight
	return (
		<div className="container">
			<div> palito</div>
			<div className="semaforo bg-dark p-2">
				
				<div className="red light active">rojo</div>

				<div className="yellow light">amarillo</div>

				<div className="green light">verde</div>


			</div>
			
		</div>
	);
};

export default Home;
