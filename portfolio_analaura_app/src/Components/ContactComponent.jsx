import Nav from './HeaderComponentMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsappSquare, faLinkedin, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope} from "@fortawesome/free-solid-svg-icons";
import { ContactUs } from './ContactUs';

export default function Contact () {

    return(
        <div className="bg-main-pink h-full pb-20">
            <Nav />
            <h1 className='text-secondary-color text-center font-bold text-[50px] pt-28 mb-10'>Vamos trabalhar juntos?</h1>
            <div className="text-secondary-color block md:hidden flex justify-center text-2xl mb-10">
                <a href="https://www.linkedin.com/in/ana-laura-nazari-a12683155/" target='_blank'>
                    <FontAwesomeIcon className="fa-xl mr-3" icon={faLinkedin} height={50}/>
                </a>
                <a href="https://www.instagram.com/analaura_nazari/" target='_blank'>
                    <FontAwesomeIcon className="fa-xl mr-3" icon={faInstagramSquare} />
                </a>
                <a href="https://wa.me/5551994680758" target='_blank'>
                <FontAwesomeIcon className="fa-xl" icon={faWhatsappSquare}/>
                </a>
            </div>
            <ContactUs />
        </div>

    );
}