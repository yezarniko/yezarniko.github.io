/* Hook */
import { useNavStyle } from "@hooks/useNavStyle";
/* React */
import { useEffect } from "react";

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
