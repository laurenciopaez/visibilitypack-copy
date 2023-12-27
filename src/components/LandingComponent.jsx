'use client'
import React from "react";
import HeaderComp from "./header/HeaderComp";
import { Button } from "@nextui-org/react";
import Network from "./comps/Network";

const LandingPage = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://visibilitypack.es/wp-content/uploads/2021/02/visibilitypack0-1.png")', backgroundSize: "500px", backgroundPosition: "85% 20%", backgroundRepeat: "no-repeat"}}>
            <HeaderComp/>
            <div className="w-[70%] h-70% flex flex-col justify-center text-center items-center mt-40">
                <h1 className="text-white font-semibold">
                    La plataforma mas utilizada
                </h1>
                <h1 className="text-white font-semibold">Por todos los influencers</h1>
                <Button className="text-pink-500 border-2 border-pink-500 w-1/4 font-extralight bg-white rounded-2xl py-1 px-2 my-4">Descubre Nuestros Servicios</Button>
            </div>

            <div className="flex flex-row gap-4 mx-40 m-auto w-full justify-center items-center">
                <Network title="Instagram" />
                <Network title="Facebook" />
                <Network  title="YouTube" />
                <Network  title="Tik Tok" />
            </div>
        </div>
    )
}

export default LandingPage;