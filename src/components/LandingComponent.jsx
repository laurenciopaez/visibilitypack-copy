"use client";
import React from "react";
import HeaderComp from "./header/HeaderComp";
import { Button } from "@nextui-org/react";
import Network from "./comps/Network";
import styles from "../components/styles/LandingPage.module.css";
import ActionsCalls from "./comps/ActionsCalls";
import ActionsCallsNet from "./comps/ActionsCallsNet";
import { Image } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="   ">
      <div
        className={`w-full flex flex-col justify-center items-center bg-gradient-to-b from-vivid-purple to-midnight ${styles["landing-page"]}     `}
      >
        <HeaderComp />

        <div className="w-[80%] h-70% flex flex-row justify-center text-center items-center mt-20">
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

          <div>
            <Image
              src="https://visibilitypack.es/wp-content/uploads/2021/02/visibilitypack0-1.png"
              width="500px"
            />
          </div>
        </div>

        <div className={styles["waves"]}>
          <div className={`${styles["wave"]} ${styles["a"]}`}></div>
          <div className={`${styles["wave"]}  ${styles["b"]}`}></div>
          <div className={`${styles["wave"]}  ${styles["c"]}`}></div>
        </div>

        <div className="flex flex-row gap-3 mx-auto justify-center items-center pb-10 z-10 sm:w-[80%] md:w-[80%] lg:w-[60%]" >
          <Network title="Instagram" />
          <Network title="Facebook" />
          <Network title="YouTube" />
          <Network title="Tik Tok" />
        </div>
      </div>
      <div className={` ${styles["second-part"]} h-screen  `}>
        <div className="absolute inset-0 bg-gradient-to-b -z-10 from-blue-500 via-white to-white"></div>
        <div className={styles["waves2"]}>
          <div className={`${styles["wave"]} ${styles["a"]}`}></div>
          <div className={`${styles["wave"]}  ${styles["b"]}`}></div>
          <div className={`${styles["wave"]}  ${styles["c"]}`}></div>
        </div>

        <div>
          <h1
            className="font-semibold text-center text-3xl text-black pt-4 z-10 "
            style={{ textShadow: "1px 1px 1px white" }}
          >
            ¿Por qué elegir Visibility Pack?
          </h1>
          <div className="flex flex-row justify-center mt-5 mx-auto xl:px-56">
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
        </div>
        <div
          className={`${styles["skewed"]} mt-20  bg-gradient-to-b from-midnight via-vivid-purple to-midnight`}
        >
          <div
            className={`flex flex-row mx-[10%] gap-1 items-center pt-10 ${styles["revertSkewed"]}`}
          >
            <ActionsCallsNet title="Twitter" />
            <ActionsCallsNet title="Spotify" />
            <ActionsCallsNet title="Twitch" />
          </div>

          <div className="w-full h-10 bg-white mt-20">
              <div   className={`flex flex-row mx-[10%] gap-1 items-center pt-10 ${styles["revertSkewed"]}`}>

              </div>
        </div>
        </div>

 


      </div>
    </div>
  );
};

export default LandingPage;
