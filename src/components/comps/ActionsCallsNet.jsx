import React  from "react";
import { CiTwitter } from "react-icons/ci";
import { FaSpotify, FaTwitch  } from "react-icons/fa";

const ActionsCallsNet = ({ title }) => {

  return (
    <div
      className="rounded-lg flex flex-col justify-center items-center pb-2 border-2 border-white shadow-white w-1/3" style={ {boxShadow: "0px 0px 30px 1px rgba(255,255,255,0.3) inset"}}
    >
      {title === "Twitter" && (
        <div className="border-2 border-white rounded-full h-[5em] w-[5em] flex items-center justify-center mt-3">

        <CiTwitter
          style={{ color: "white", width: "3em", height: "3em" }}
          className="mt-2 mb-2"
        />
        </div>
      )}
      {title === "Spotify" && (
         <div className="border-2 border-white rounded-full h-[5em] w-[5em] flex items-center justify-center mt-3">
        <FaSpotify style={{ color: "white", width: "3em", height: "3em" }}  className="mt-2 mb-2"/>
        </div>
      )}
      {title === "Twitch" && (
         <div className="border-2 border-white rounded-full h-[5em] w-[5em] flex items-center justify-center mt-3">
        <FaTwitch  style={{ color: "white", width: "3em", height: "3em" }}  className="mt-2 mb-2"/>
        </div>
      )}
      <h1 className="sm:text-base md:text-lg lg:text-xl text-center font-semibold text-white  mt-3"  >{title}</h1>
      <button className="border-2 border-white font-light py-1 my-2 bg-transparent rounded-sm hover:bg-black hover:cursor-pointer hover:text-yellow-400 hover:scale-105 text-white px-2">Promueve tu {title}</button>
    </div>
  );
};

export default ActionsCallsNet;
