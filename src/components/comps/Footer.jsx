import React from "react";
import { Image } from "react-bootstrap";

import { FaLinkedin, FaGithub, FaYoutube   } from "react-icons/fa";
import {
    FaFacebookSquare,
    FaInstagram,
  } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
    <div className="flex flex-col lg:flex-row xl:flex-row w-full mx-auto justify-center py-5 xs:px-10 md:px-10 sm:px-10 lg:px-36 xl:px-40 xxl:px-50 content-center items-center text-center">
            <div className="w-1/3 mb-4">
                <Image   src="https://visibilitypack.es/wp-content/uploads/2021/02/visbiility-pack-ldfr-300x180.png"
            className="lg:w-1/2 xl:w-1/2 mb-2 w-3/4 " />
            <div className="flex flex-row justify-start gap-2">
            <FaFacebookSquare className="hover:cursor-pointer text-white  text-xl"  />
            <FaInstagram className="hover:cursor-pointer text-white text-xl " />
            </div>
                
            </div>
            <div className="flex flex-col text-white w-1/3 ">
                <p className="hover:cursor-pointer">Terminos y condiciones</p>
                <p className="hover:cursor-pointer">Privacy Policy</p>
                <p className="hover:cursor-pointer">Cookie Policy</p>
                <p className="hover:cursor-pointer">Sitemap</p>
                <p className="hover:cursor-pointer">Opiniones</p>
                <p className="hover:cursor-pointer">Area de Afiliados</p>
            </div>
            <div className="w-1/3 text-white flex flex-col">
                <Image src="https://visibilitypack.es/wp-content/uploads/2021/02/visibility-pack-454kj-.png" className="w-1/6 mx-auto mb-2" />
                <p>Pongase en contacto con nuestro servicio de atencion al cliente si tiene alguna pregunta</p>
            </div>

        </div>
          <div className="w-full bg-white text-black font-semibold flex flex-col gap-3 py-4 px-4 text-center justify-center">
          <h3>Pagina web creada por Laurencio Paez</h3>
          <a target="_blank" href="https://www.linkedin.com/in/laurencio-paez-727042155/" className="hover:text-blue-500 hover:cursor-pointer flex flex-row gap-2 mx-auto items-center">Linkedin <FaLinkedin />
  </a>
          <a target="_blank" className="hover:text-green-500 items-center hover:cursor-pointer flex flex-row gap-2 mx-auto" href="https://github.com/laurenciopaez/visibilitypack-copy">GitHub <FaGithub />
  </a>
          <a className="hover:text-red-500 hover:cursor-pointer flex flex-row gap-2 mx-auto items-center" target="_blank" href="https://www.youtube.com/channel/UCYGzOnpX3646TLuWIs0Zy-A">Youtube <FaYoutube /></a>
        </div>
        </div>
    
    )
}

export default Footer;