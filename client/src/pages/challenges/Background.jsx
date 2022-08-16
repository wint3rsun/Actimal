import Particles from "react-tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import LevelupConfig from "./LevelupConfig";

function Background () {

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={LevelupConfig}
    />
    
  );
};

export default Background;