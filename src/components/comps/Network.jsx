import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {
  CiYoutube,
  CiInstagram,
  CiFacebook,
  CiMusicNote1,
} from "react-icons/ci";

const Network = ({ title }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const handleColor = (title) => {
      switch (title) {
        case "Instagram":
          setColor("#b45309");
          break;
        case "Facebook":
          setColor("blue");
          break;
        case "YouTube":
          setColor("red");
          break;
        case "Tik Tok":
          setColor("violet");
          break;
        default:
          break;
      }
    };
    handleColor(title);
  }, [title]);

  return (
    <div
      className="bg-white-700 rounded-lg shadow-lg shadow-black border-2 border-blue-900 flex flex-col px-8 gap-3 justify-center items-center pb-2 bg-white pt-3 w-1/2"
      style={{ color: `${color}` }}
    >
      {title === "Instagram" && (
        <CiInstagram
          style={{ color: "#b45309" }}
          className="sm:w-[2em] md:w-[2em] lg:w-[3em] sm:h-[2em] md:h-[2em] lg:h-[3em] xl:w-[4em] xl:h-[4em]"
        />
      )}
      {title === "Facebook" && (
        <CiFacebook style={{ color: "blue" }}
        className="sm:w-[2em] md:w-[2em] lg:w-[3em] sm:h-[2em] md:h-[2em] lg:h-[3em] xl:w-[4em] xl:h-[4em]" />
      )}
      {title === "YouTube" && (
        <CiYoutube style={{ color: "red"}}
        className="sm:w-[2em] md:w-[2em] lg:w-[3em] sm:h-[2em] md:h-[2em] lg:h-[3em] xl:w-[4em] xl:h-[4em]" />
      )}
      {title === "Tik Tok" && (
        <CiMusicNote1
          style={{ color: "violet" }}
          className="sm:w-[2em] md:w-[2em] lg:w-[3em] sm:h-[2em] md:h-[2em] lg:h-[3em] xl:w-[4em] xl:h-[4em]"
        />
      )}
      <h1 className="sm:text-base md:text-lg lg:text-xl ">{title}</h1>
      <Button
        className="sm:text-sm md:text-base lg:text-lg font-normal bg-white border-2 hover:scale-105" 
        style={{ color: `${color}`, borderColor: `${color}` }}
      >
        Seguidores
      </Button>
      <Button
        className="sm:text-sm md:text-base lg:text-lg  font-normal bg-white border-2 hover:scale-105"
        style={{ color: `${color}`, borderColor: `${color}` }}
      >
        Likes
      </Button>
      <Button
        className="sm:text-sm md:text-base lg:text-lg  font-normal bg-white border-2  hover:scale-105"
        style={{ color: `${color}`, borderColor: `${color}` }}
      >
        Views
      </Button>
    </div>
  );
};

export default Network;
