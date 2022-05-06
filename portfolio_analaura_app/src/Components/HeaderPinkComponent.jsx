import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';



export default function HeaderPink () {

    return(
        <div className="">
            <div className=" bg-main-pink p-6 flex flex-row justify-between">
                <div>
                    <Link to="/" className=" font-bold text-lg text-white">Ana Laura Nazari</Link>
                </div>
                <div className=" font-bold text-lg text-white">
                    <Link className="mr-4" to="/">Home</Link>
                    <Link className="mr-4" to="/portfolio">Portfólio</Link>
                    <Link className="" to="#">Contato</Link>
                </div>
                <div className="text-white">
                    <a href="#">
                        <FontAwesomeIcon className="fa-xl mr-3" icon={faLinkedin} height={50}/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className="fa-xl" icon={faInstagramSquare} />
                    </a>
                </div>
            </div>
        </div>
        
    )

}