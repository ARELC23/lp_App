import React from "react";
import TypewriterBox from "./Typewriter"; // Imports the Typewriter component
import { Link } from "react-router-dom";

const Terminals = () => {
  return (
    <div className="flex justify-between">
      <TypewriterBox
        content="Learn to navigate in Linux using an terminal emulator"
        linkTo="src\pages\Navigate"
        initialText="Lesson One: Click Here"
      />
      <TypewriterBox
        content="Create Directories, files and links with the command line"
        linkTo="/pages/Create"
        initialText="Lesson 2: Click Here"
      />
      <TypewriterBox
        content="Learn to move, copy and find files using the Linux terminal"
        linkTo="/pages/Move"
        initialText="Lesson 3: Click Here"
      />
    </div>
  );
};

export default Terminals;
