import React from "react";
import emailjs from 'emailjs-com';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'


function Contact() {

  function enviarEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_drf18sl','template_sqwj92m',e.target,'whpWO3QHie5g744dU').then(res=>(
      // eslint-disable-next-line
      alert("Email enviado!"), 
      console.log(res)
      ))
    }

    return (
      <main className="container mx-auto max-width pt-10 mb-20">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">Contact</h1>
  
        <div className="container  mt-7 mx-auto px-4 md:flex shadow-md rounded bg-gray-50">
          
          <form onSubmit={enviarEmail} className=" max-w-md mx-auto sm:w-full md:w-1/2 px-8 pt-6 pb-8 mb-4 lg:mr-4 lg:mb-0 lg:w-1/2">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre *
              </label>
              <input type="text" required name="nombre" id="nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email *
              </label>
              <input type="email" required name="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="empresa">
                Empresa
              </label>
              <input type="text" name="empresa" id="empresa" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Teléfono
              </label>
              <input type="text" name="phone" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
                Mensaje *
              </label>
              <textarea type="text" required name="mensaje" id="mensaje" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mb-6 text-center"> {/* Div para centrar el botón */}
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Enviar correo
              </button>
            </div>
          </form>
        
  
        <div className="contact-info mt-2 text-center xs:w-full md:w-1/2 flex flex-col justify-evenly">
          <div className=" align-center mx-auto">
            <h3 className="text-xl font-bold mb-8">More information</h3>
            <ul className="list-none ml-6 inline-block flex flex-col ml-0">
              <li className="mb-2"><FontAwesomeIcon icon={faLocationDot} className="mr-2" /> Zapopan, Jalisco, México.</li>
              <li className="mb-2"><FontAwesomeIcon icon={faWhatsapp} className="mr-2" />+52 33 3100 0176</li>
              <li><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> developvess@gmail.com</li>
            </ul>
          </div>
          <div className="sm:w-1/2 w-2/3 align-center mx-auto pt-5 pb-5">
            <p className="">You can contact me through this form, write to me via email, WhatsApp or phone call.</p>
          </div>
        </div>
      </div>
      </main>
    );
}

export default Contact;
