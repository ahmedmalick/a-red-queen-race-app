import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import cloud from  './images/cloud.png';
import cycle from  './images/cycle.gif';
import './App.css';

function App() {

  const { ref, getAnimation: cycleAnimate } = useWebAnimations({
    keyframes: {
      transform: "translateX(160)",
      transform: "translateX(320px)",
    },
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  const { ref: cloud1 } = useWebAnimations({
    keyframes: {
      transform: "translateX(1500px)",
      transform: "translateX(-1500px)",
    },
    timing: {
      duration: 1500,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  const { ref: cloud2 } = useWebAnimations({
    keyframes: {
      transform: "translateX(1500px)",
      transform: "translateX(-1500px)",
    },
    timing: {
      duration: 1500,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  const speedUp = () => {
   const cycleSpeed = cycleAnimate();
   cycleSpeed.updatePlaybackRate(cycleSpeed.playbackRate * 1.1);
  };

  return (
    <div>
      <img className="img-1" src={cloud} alt="cloud" ref={cloud1} />
      <img className="img-2" src={cloud} alt="cloud" ref={cloud2} />
      <img className="cycle" src={cycle} alt="cycle" onClick={speedUp} ref={ref} />
    </div>
  );
}

export default App;
