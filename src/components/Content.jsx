import React from "react";

export default function Content() {
  return (
    <div className="bg-black bg-opacity-80 p-4 px-2 rounded-md shadow-md mt-8">
      <div className="text-white absolute left-81">$&gt;</div>
      <div className="text-white flex justify-center">
        {/* Linux is an operating system that is based on the Linux kernel, which is
        a core program that manages the communication between hardware and
        software.*/}{" "}
        Linux is free and open-source, meaning anyone can use it. Linux is also
        highly customizable, secure and stable, making it a popular choice for
        developers, servers and enthusiasts. There are many different versions
        or distributions of Linux, each with its own features, design and
        software. Please find out more about some of the most common Linux
        distributions via the Desktop and Enterprise buttons.
      </div>
    </div>
  );
}
