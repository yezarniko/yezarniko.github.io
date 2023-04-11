import { useNavStyle } from "@hooks/useNavStyle";
import React, { useEffect } from "react";

/**
 * * About Page
 * @component
 * @return {ReactNode} - The representation of About Page UI
 */
function About() {
  useEffect(() => {
    console.log("render about");
  });

  const { changeNavStyle } = useNavStyle();

  useEffect(() => {
    changeNavStyle(true);
  });
  return <div>About</div>;
}

export default About;
