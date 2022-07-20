import React,{useState} from "react";


//create your first component
const Home = () => {
	let [activeLight, setActiveLight] = useState("")
	let handleLight=(color)=> {
		setActiveLight(color)
	}
	return (
		<div className="container m-auto d-flex aling-items-center flex-column">
			<div className="d-flex justify-content-center poste"></div>
			<div className="semaforo">
				<div className={`red light ${activeLight === "red" ? "active" : ""}` } onClick={()=> handleLight("red")}></div>

				<div className={`yellow light ${activeLight === "yellow" ? "active" : ""}` } onClick={()=> handleLight("yellow")}></div>

				<div className={`green light ${activeLight === "green" ? "active" : ""}` } onClick={()=> handleLight("green")}></div>

			</div>
			
		</div>
	);
};


export default Home;
