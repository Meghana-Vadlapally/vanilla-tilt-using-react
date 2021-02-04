import React, { useRef, useEffect } from "react";
import "./styles.css";

import VanillaTilt from "vanilla-tilt";

function Tilt({ children }) {
  const tiltRef = useRef();

  useEffect(() => {
    const { current: tiltNode } = tiltRef;
    // useRef gives an object that has a 'current' property on that
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5
    };
    VanillaTilt.init(tiltNode, vanillaTiltOptions);
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  );
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  );
}

export default App;
