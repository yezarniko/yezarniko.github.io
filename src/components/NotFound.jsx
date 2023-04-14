/* Hook */
import { useNavStyle } from "@hooks/useNavStyle";
/* React */
import { useEffect } from "react";

import fourZfour from "@assets/404.gif";

function NotFound() {
  const { changeNavStyle } = useNavStyle();
  useEffect(() => {
    changeNavStyle(true);
  });
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <img
        src={fourZfour}
        style={{
          width: "100%",
          height: "92vh",
          objectFit: "cover",
          position: "absolute",
          top: "8vh",
          userSelect: "none",
        }}
      />
    </div>
  );
}

export default NotFound;
