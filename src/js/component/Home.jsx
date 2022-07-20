import React,{useState} from "react";


//create your first component
const Home = () => {
	let [activeLight, setActiveLight] = useState("")
	let handleLight=(color)=> {
		setActiveLight(color)
	}
	return (
		<div className="container m-auto d-flex aling-items-center flex-column">
			<div className="d-flex justify-content-center aling-content-center bg-dark w-25"> </div>
			<div className="semaforo bg-dark p-2">
				
				<div className={`red light active ${activeLight === "red" ? "active" : ""}` } onClick={()=> handleLight("red")}></div>

				<div className={`yellow light active ${activeLight === "yellow" ? "active" : ""}` } onClick={()=> handleLight("yellow")}></div>

				<div className={`green light active ${activeLight === "green" ? "active" : ""}` } onClick={()=> handleLight("green")}></div>


			</div>
			
		</div>
	);
};

export default Home;
