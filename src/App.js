import React from 'react';
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
import cloud from  './images/cloud.png';
import cycle from  './images/cycle.gif';
import './App.css';

function App() {

  const { ref: cycle1, getAnimation: cycleAnimate } = useWebAnimations({
    keyframes: [
      {transform: "translateX(0)"},
      {transform: "translateX(700px)"},
    ],
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  const { ref: cloud1, getAnimation: cloud1Animate } = useWebAnimations({
    keyframes: [
      {transform: "translateX(1500px)"},
      {transform: "translateX(-1500px)"},
    ],
    timing: {
      duration: 4000,
      iterations: Infinity,
      // direction: "alternate",
      // easing: "ease-in-out",
    },
  });

  const { ref: cloud2, getAnimation: cloud2Animate } = useWebAnimations({
    keyframes: [
      {transform: "translateX(1500px)"},
      {transform: "translateX(-1500px)"},
    ],
    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { keyframes, timing } = pulse;

  const speedUp = () => {
   const cycleSpeed = cycleAnimate();
   const cloud1Speed = cloud1Animate();
   const cloud2Speed = cloud2Animate();
   cycleSpeed.updatePlaybackRate(cycleSpeed.playbackRate * 1.1);
   cloud1Speed.updatePlaybackRate(cloud1Speed.playbackRate * 1.1);
   cloud2Speed.updatePlaybackRate(cloud2Speed.playbackRate * 1.1);
  };

  return (
    <div>
      <img className="img-1" src={cloud} alt="cloud" ref={cloud1} />
      <img className="img-2" src={cloud} alt="cloud" ref={cloud2} />
      <img className="cycle" src={cycle} alt="cycle" onClick={speedUp} ref={cycle1} />
    </div>
  );
}

export default App;
