"use client";
import React from "react";
import HeaderComp from "./header/HeaderComp";
import { Button } from "@nextui-org/react";
import Network from "./comps/Network";
import styles from "../components/styles/LandingPage.module.css";
import ActionsCalls from "./comps/ActionsCalls";
import ActionsCallsNet from "./comps/ActionsCallsNet";
import { Image } from "react-bootstrap";
import NumberIncremental from "./comps/NumberIncremental";
import Quotes from "./comps/Quotes";
import Footer from "./comps/Footer";

const LandingPage = () => {
  return (
    <div>
      <div
        className={`w-full flex flex-col justify-center items-center bg-gradient-to-b from-vivid-purple to-midnight ${styles["landing-page"]}     `}
      >
        <HeaderComp />

        <section className="w-[80%] h-70% flex flex-row justify-center text-center items-center mt-20">
          <div className="flex flex-col">
            <h1 className="text-white font-semibold">
              La plataforma mas utilizada
            </h1>
            <h1 className="text-white font-semibold">
              Por todos los influencers
            </h1>
            <Button className="text-pink-500 border-2 border-pink-500 font-extralight bg-white rounded-2xl p-2 my-4 w-1/2 mx-auto">
              Descubre Nuestros Servicios
            </Button>
          </div>

          <div className="lg:flex xl:flex hidden">
            <Image
              src="https://visibilitypack.es/wp-content/uploads/2021/02/visibilitypack0-1.png"
              width="500px"
            />
          </div>
        </section>

        {/* Efecto de olas */}
        <div className={styles["waves"]}>
          <div className={`${styles["wave"]} ${styles["a"]}`}></div>
          <div className={`${styles["wave"]}  ${styles["b"]}`}></div>
          <div className={`${styles["wave"]}  ${styles["c"]}`}></div>
        </div>

        <section className="flex flex-col lg:flex-row xl:flex-row lg:gap-3 xl:gap-3 mx-auto justify-center items-center pb-10 z-10  lg:w-[60%]">
          <Network title="Instagram" />
          <Network title="Facebook" />
          <Network title="YouTube" />
          <Network title="Tik Tok" />
        </section>
      </div>

      <div className={` ${styles["second-part"]} h-auto  `}>
        {/* Efecto de olas */}
        <div className="absolute inset-0 bg-gradient-to-b -z-10 from-blue-500 via-white to-white"></div>
        <div className={styles["waves2"]}>
          <div className={`${styles["wave"]} ${styles["a"]}`}></div>
          <div className={`${styles["wave"]}  ${styles["b"]}`}></div>
          <div className={`${styles["wave"]}  ${styles["c"]}`}></div>
        </div>

        {/* seccion 2 */}
        <section className="flex flex-col">
          <h1
            className="font-semibold text-center text-3xl text-black pt-4 "
            style={{ textShadow: "1px 1px 1px white" }}
          >
            ¿Por qué elegir Visibility Pack?
          </h1>
          <div className="flex flex-col lg:flex-row xl:flex-row justify-center mt-5 mx-auto xl:px-56">
            <ActionsCalls
              index="1"
              title="Resultados garantizados"
              text="Antes de ser puesto a la venta, cada servicio de VisibilityPack se prueba miles de veces para garantizar la máxima calidad."
            />
            <ActionsCalls
              index="2"
              title="Activación Inmediata"
              text="¡El pedido se procesa en minutos a través de una herramienta automatizada! solo tendrá que esperar que se dispense el producto."
            />
            <ActionsCalls
              index="3"
              title="Servicio de Calidad"
              text="Todos nuestros usuarios son reales. Cada paquete en el sitio se prueba en perfiles de muestra antes de venderse. Asistencia española garantizada H24."
            />
          </div>
        </section>

        {/* Parte inclinada */}
        <section
          className={`${styles["skewed"]} mt-20  bg-gradient-to-b from-midnight via-vivid-purple to-midnight `}
        >
          <div
            className={`flex flex-col lg:flex-row xl:flex-row mx-[10%] gap-1 items-center pt-10 pb-8 ${styles["revertSkewed"]}`}
          >
            <ActionsCallsNet title="Twitter" />
            <ActionsCallsNet title="Spotify" />
            <ActionsCallsNet title="Twitch" />
          </div>

          <div className="w-full h-10 bg-white mt-20 border-2 border-white"></div>
        </section>
      </div>

      <section className="w-full bg-white pb-5 text-black">
        <div className="flex flex-col w-full">
          <div className="flex flex-col lg:flex-row xl:flex-row justify-center mx-auto xl:px-56">
            <ActionsCalls
              index="4"
              title="Entrega Inmediata"
              text="Tan pronto como se reciba el pago, nuestro equipo se activará para procesar su pedido en unos minutos. ¡Ver es creer!"
            />
            <ActionsCalls
              index="5"
              title="Soporte Constante H24"
              text="¡El pedido se procesa en minutos a través de una herramienta automatizada! solo tendrá que esperar que se dispense el producto."
            />
            <ActionsCalls
              index="6"
              title="Mejor calidad !"
              text="Nuestra asistencia está siempre dispuesta a dar respuesta a todas sus dudas o preguntas, escríbanos a: info@visibilitypack.es"
            />
          </div>
        </div>
        <Button className="text-pink-500 border-2 border-pink-500 font-extralight bg-white rounded-2xl p-2 my-4 mx-auto flex">
          Descubre Nuestros Servicios
        </Button>

        <h1 className="text-lg justify-center flex w-full">
          Agencia especializada en Social Media Marketing! Aqui estan nuestros
          resultados...
        </h1>
        <section className="sm:w-[80%] md:w-[80%] lg:w-[60%] xl:w-[80%] flex flex-col lg:flex-row xl:flex-row justify-center mx-auto gap-2 items-center">
          <NumberIncremental
            targetNumber={24365}
            text="Clientes Satisfechos"
            color="#FF00FF"
          />
          <NumberIncremental
            targetNumber={52982}
            text="Pedidos Cumplidos"
            color="blue"
          />
          <NumberIncremental
            targetNumber={686}
            text="Influencers"
            color="#8A2BE2"
          />
        </section>

        <section className="w-full mt-20 px-12 mx-auto justify-center content-center flex mb-10 h-[150px]">
          <Quotes/>
        </section>
      </section>
      <Footer/>
    </div>
  );
};

export default LandingPage;
