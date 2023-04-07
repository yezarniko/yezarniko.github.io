import React from "react";
import { useEffect } from "react";

function About({ setIsNavScrolled }) {
  useEffect(() => {
    setIsNavScrolled(true);
  });
  return <div>About</div>;
}

export default About;
