import Nav from './HeaderComponentMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Contact () {

    return(
        <div className="bg-main-pink h-screen">
            <Nav />
            <h1 className='text-secondary-color text-center font-bold text-[50px] pt-64'>Vamos trabalhar juntos?</h1>
            <div className="text-secondary-color mt-8 text-[50px] flex justify-center">
                <a href="https://wa.me/5551994680758" target='_blank'>
                    <FontAwesomeIcon className="fa-xl mr-3" icon={faWhatsappSquare}/>
                </a>
                <a href="mailto:analaura.nazari@gmail.com" target='_blank'>
                    <FontAwesomeIcon className="fa-xl" icon={faSquareEnvelope} />
                </a>
            </div>
        </div>

    );
}