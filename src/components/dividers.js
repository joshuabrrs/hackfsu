import React from "react";

import rainbow from "../images/line_rainbow_30px.svg";

const RainbowDivider = () => (
  <div
    style={{
      backgroundImage: `url(${rainbow})`,
      backgroundRepeat: "repeat-x",
      height: "4rem",
      width: "100vw",
    }}
  />
);

export { RainbowDivider };
