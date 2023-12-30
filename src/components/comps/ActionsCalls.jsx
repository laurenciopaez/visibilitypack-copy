import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CgSandClock } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";

const ActionsCalls = ({ title, index, text }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const handleColor = (index) => {
      switch (index) {
        case "1":
          setColor("#FF00FF");
          break;
        case "2":
          setColor("blue");
          break;
        case "3":
          setColor("#8A2BE2");
          break;
        default:
          break;
      }
    };
    handleColor(index);
  }, [index]);

  return (
    <div
      className="rounded-lg flex flex-col px-8 gap-3 justify-center items-center pb-2 pt-3"
    >
      {index === "1" && (
        <BsGraphUpArrow
          style={{ color: "#FF00FF ", width: "3em", height: "3em" }}
        />
      )}
      {index === "2" && (
        <CgSandClock style={{ color: "blue", width: "3em", height: "3em" }} />
      )}
      {index === "3" && (
        <FaRegThumbsUp style={{ color: "#8A2BE2", width: "3em", height: "3em" }} />
      )}
      <h1 className="sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold"   style={{ color: `${color}` }}>{title}</h1>
      <p className="text-xl font-normal text-center ">{text}</p>
    </div>
  );
};

export default ActionsCalls;
