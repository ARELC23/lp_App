import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
{
  /* this component can be used again Typewriter*/
}

const Typewriter = ({ content, onClick, linkTo, initialText }) => {
  const [text, setText] = useState(initialText);
  const navigate = useNavigate();

  const startTyping = () => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText(content.substring(0, index));
      index++;

      if (index > content.length) {
        clearInterval(typingInterval);
      }
    }, 50);
  };

  useEffect(() => {
    setText(initialText); // Clears the text when the component mounts(no longer)....sets the initial text when the component mounts
  }, []);

  const handleClick = () => {
    startTyping();

    // After the typing animation is complete, navigate to the specified link
    setTimeout(() => {
      navigate(linkTo);
    }, content.length * 50 + 500); // Adjust the timeout based on your typing speed
  };

  return (
    <div
      className="terminal-window bg-black bg-opacity-80 p-2 px-8 rounded-md shadow-md mt-4 ml-auto mr-auto max-w-md cursor-pointer"
      onClick={onClick || handleClick}
    >
      <div className="text-white">$&gt;</div>
      <div className="text-white">{text}</div>
    </div>
  );
};

export default Typewriter;
