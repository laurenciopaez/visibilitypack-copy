import React  from "react";
import { CiTwitter } from "react-icons/ci";
import { FaSpotify, FaTwitch  } from "react-icons/fa";

const ActionsCallsNet = ({ title }) => {

  return (
    <div
      className="rounded-lg flex flex-col justify-center items-center pb-2 border-2 border-white shadow-white shadow-lg w-1/3"
    >
      {title === "Twitter" && (
        <CiTwitter
          style={{ color: "pink", width: "3em", height: "3em" }}
        />
      )}
      {title === "Spotify" && (
        <FaSpotify style={{ color: "blue", width: "3em", height: "3em" }} />
      )}
      {title === "Twitch" && (
        <FaTwitch  style={{ color: "#9b51e0", width: "3em", height: "3em" }} />
      )}
      <h1 className="sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold"  >{title}</h1>
    </div>
  );
};

export default ActionsCallsNet;
