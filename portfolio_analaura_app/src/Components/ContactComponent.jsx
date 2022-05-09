import Nav from './HeaderComponentMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope} from "@fortawesome/free-solid-svg-icons";
import { ContactUs } from './ContactUs';

export default function Contact () {

    return(
        <div className="bg-main-pink h-full pb-20">
            <Nav />
            <h1 className='text-secondary-color text-center font-bold text-[50px] pt-28 mb-10'>Vamos trabalhar juntos?</h1>

            <ContactUs />
        </div>

    );
}