import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6arvvxq', 'template_k356x4h', form.current, 'fa43rj5b0dL1JZ-lC')
      .then((result) => {
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          alert('Atualize a página e tente novamente!');
      });
  };

  return(
  
      <div className='flex justify-center'>
        <form ref={form} onSubmit={sendEmail} className="bg-secondary-color rounded-lg w-5/6 md:w-2/4 flex flex-col items-center text-main-pink text-base md:text-xl p-10" >
          <label>Nome</label>
          <input type="text" name="name" className='mt-2 mb-10 rounded-full p-2 text-center w-[250px] md:w-3/4'/>
          <label>Email</label>
          <input type="email" name="email" className='mt-2 mb-10 rounded-full p-2 text-center w-[250px] md:w-3/4'/>
          <label>Mensagem</label>
          <textarea name="message" className='mt-2 mb-2 rounded-lg p-2 text-center h-[150px] w-[250px] md:w-3/4' />
          <input type="submit" value="Enviar" className='mt-8 px-14 py-1 rounded-full bg-main-pink text-secondary-color cursor-pointer'/>
          </form>
      </div>

  )
};
