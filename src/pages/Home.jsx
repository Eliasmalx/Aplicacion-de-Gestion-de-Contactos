import contactimg from "../assets/img/8102780.png"
import { Link } from "react-router-dom";

export const Home = () => {

	return (
		<div className="text-center mt-5">
			<h1>No hay Contactos Archivados</h1>
			<div className="d-flex flex-column align-items-center">
				<Link to="/addContact">
				<button>Agregar Contacto</button>
				</Link>
				<img src={contactimg} style={{ width: "18rem" }} />
			</div>
		</div>
	);
}; 