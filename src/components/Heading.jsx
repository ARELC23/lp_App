import React, { useState } from "react";

export default function Heading() {
  const [LeftDropdownOpen, setLeftDropdownOpen] = useState(false);
  const [RightDropdownOpen, setRightDropdownOpen] = useState(false);

  const openLeftDropdown = () => {
    setLeftDropdownOpen(true);
  };

  const closeLeftDropdown = () => {
    setLeftDropdownOpen(false);
  };

  const openRightDropdown = () => {
    setRightDropdownOpen(true);
  };

  const closeRightDropdown = () => {
    setRightDropdownOpen(false);
  };

  return (
    <div className="w-full bg-blue-900 p-2 rounded-md text-white flex justify-between items-center">
      {" "}
      {/* unclear as to why the w-full does not work? */}
      <div
        className="relative inline-block"
        onMouseEnter={openLeftDropdown}
        onMouseLeave={closeLeftDropdown}
      >
        <button className="bg-blue-950 text-blue-300 p-2 rounded-md focus:outline-none">
          Desktop Distributions
        </button>

        {LeftDropdownOpen && (
          <div className="absolute bg-blue-950 flex flex-col p-8 rounded-md shadow-md">
            {" "}
            {/* would have liked to have the dropdown same size as the button... */}
            <a
              href="https://www.debian.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Debian
            </a>
            <a
              href="https://manjaro.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manjaro
            </a>
            <a
              href="https://www.linuxmint.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linux Mint
            </a>
          </div>
        )}
      </div>
      <div className="bg-blue-950 p-2 rounded-md text-blue-300">
        <h1 className="text-4xl font-bold">Linux Terminal</h1>
        <p className="text-lg">
          Learn how to use Linux through the command line terminal.
        </p>
      </div>
      <div
        className="relative inline-block"
        onMouseEnter={openRightDropdown}
        onMouseLeave={closeRightDropdown}
      >
        <button className="bg-blue-950 text-blue-300 p-2 rounded-md focus:outline-none">
          Enterprise Distributions
        </button>

        {RightDropdownOpen && (
          <div className="absolute bg-blue-950 flex flex-col p-8 rounded-md shadow-md">
            <a
              href="https://www.suse.com/products/server/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUSE
            </a>
            <a
              href="https://www.oracle.com/linux/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oracle
            </a>
            <a
              href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Red Hat
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
