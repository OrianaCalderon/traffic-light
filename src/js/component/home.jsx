
import React,{useState} from "react";


//create your first component
const Home = () => {
	let [activeLight, setActiveLight] = useState("")
	return (
		<div className="container m-auto d-flex aling-items-center flex-column">
			<div className="d-flex justify-content-center aling-content-center bg-dark w-25"> </div>
			<div className="semaforo bg-dark p-2">
				
				<div className={`red light active ${activeLight === "red" ? "active" : ""}` } onClick>rojo</div>

				<div className="yellow light">amarillo</div>

				<div className="green light">verde</div>


			</div>
			
		</div>
	);
};

export default Home;
