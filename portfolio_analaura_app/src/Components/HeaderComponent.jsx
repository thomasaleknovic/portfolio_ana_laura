import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


export default function HeaderWhite () {

    return(
        <div className="">
            <div className=" bg-white p-6 flex flex-row justify-between">
                <div>
                    <Link to="/" className=" font-bold text-lg text-main-pink">Ana Laura Nazari</Link>
                </div>
                <div className=" font-bold text-lg text-main-pink hidden md:block">
                    <Link className="mr-4" to="/">Home</Link>
                    <Link className="mr-4" to="/portfolio">Portfólio</Link>
                    <Link className="" to="#">Contato</Link>
                </div>
                <div className="text-main-pink hidden md:block">
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

