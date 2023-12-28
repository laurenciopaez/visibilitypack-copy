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
  const [icon, setIcon] = useState("");

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
      className="bg-white-700 rounded-lg shadow-xl border-2 flex flex-col px-8 gap-3 justify-center items-center pb-2 bg-white w-1/5 pt-3"
      style={{ color: `${color}` }}
    >
      {title === "Instagram" && (
        <CiInstagram
          style={{ color: "#b45309", width: "2em", height: "2em" }}
        />
      )}
      {title === "Facebook" && (
        <CiFacebook style={{ color: "blue", width: "2em", height: "2em" }} />
      )}
      {title === "YouTube" && (
        <CiYoutube style={{ color: "red", width: "2em", height: "2em" }} />
      )}
      {title === "Tik Tok" && (
        <CiMusicNote1
          style={{ color: "violet", width: "2em", height: "2em" }}
        />
      )}
      <h1 className="sm:text-base md:text-lg lg:text-xl ">{title}</h1>
      <Button
        className="sm:text-sm md:text-base lg:text-lg font-normal bg-white border-2"
        style={{ color: `${color}`, borderColor: `${color}` }}
      >
        Seguidores
      </Button>
      <Button
        className="sm:text-sm md:text-base lg:text-lg  font-normal bg-white border-2"
        style={{ color: `${color}`, borderColor: `${color}` }}
      >
        Likes
      </Button>
      <Button
        className="sm:text-sm md:text-base lg:text-lg  font-normal bg-white border-2"
        style={{ color: `${color}`, borderColor: `${color}` }}
      >
        Views
      </Button>
    </div>
  );
};

export default Network;
